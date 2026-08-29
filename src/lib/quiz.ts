import {
  allPlacements,
  contentLocale,
  getBlock,
  photoItems,
  studyableItems,
  type Item,
} from "@/lib/content";
import { translate, type StringKey } from "@/i18n/strings";

/**
 * Question prompts follow the language the content layer is serving, so a
 * translated exam does not ask its questions in English. The locale is read
 * rather than passed because every caller already relies on the content layer
 * carrying it.
 */
function prompt(key: StringKey, values?: Record<string, string | number>): string {
  return translate(contentLocale(), key, values);
}

export type Question =
  | {
      kind: "photo-id";
      id: string;
      itemSlug: string;
      imageUrl: string;
      prompt: string;
      options: string[];
      answer: string;
    }
  | {
      kind: "placement";
      id: string;
      itemSlug: string;
      prompt: string;
      options: string[];
      answer: string;
    }
  | {
      kind: "armament";
      id: string;
      itemSlug: string;
      prompt: string;
      options: string[];
      answer: string;
    }
  | {
      kind: "designation";
      id: string;
      itemSlug: string;
      prompt: string;
      options: string[];
      answer: string;
    }
  | {
      kind: "seniority";
      id: string;
      itemSlug: string;
      prompt: string;
      options: string[];
      answer: string;
    };

function shuffle<T>(input: T[], rng: () => number = Math.random): T[] {
  const out = [...input];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const a = out[i]!;
    const b = out[j]!;
    out[i] = b;
    out[j] = a;
  }
  return out;
}

function pickDistractors(pool: string[], answer: string, count: number): string[] {
  const unique = [...new Set(pool)].filter((value) => value !== answer);
  const options = shuffle(unique).slice(0, count);
  return shuffle([answer, ...options]);
}

/** Photo recognition: distractors come from the same block, so they look alike. */
export function photoQuestion(item: Item, blockPool: Item[]): Question | null {
  if (!item.imageUrl) return null;
  const names = blockPool.filter((i) => i.slug !== item.slug).map((i) => i.name);
  if (names.length < 3) return null;
  return {
    kind: "photo-id",
    id: `photo:${item.slug}`,
    itemSlug: item.slug,
    imageUrl: item.imageUrl,
    prompt: prompt("prompt.photo"),
    options: pickDistractors([...names, item.name], item.name, 3),
    answer: item.name,
  };
}

export function placementQuestion(item: Item, placementPool: string[]): Question | null {
  const answer = item.placements[0];
  if (!answer) return null;
  const pool = placementPool.filter((p) => !item.placements.includes(p));
  if (pool.length < 3) return null;
  const options = pickDistractors([...pool, answer], answer, 3);
  if (
    optionGivesItselfAway(
      item.name,
      answer,
      options.filter((o) => o !== answer),
    )
  )
    return null;
  return {
    kind: "placement",
    id: `place:${item.slug}`,
    itemSlug: item.slug,
    prompt: prompt("prompt.placement", { name: item.name }),
    options,
    answer,
  };
}

export function armamentQuestion(item: Item, pool: Item[]): Question | null {
  if (!item.armament) return null;
  const others = [
    ...new Set(
      pool
        .filter((i) => i.slug !== item.slug && i.armament && i.armament !== item.armament)
        .map((i) => i.armament!),
    ),
  ];
  if (others.length < 3) return null;
  const options = pickDistractors([...others, item.armament], item.armament, 3);
  if (
    optionGivesItselfAway(
      item.name,
      item.armament,
      options.filter((o) => o !== item.armament),
    )
  )
    return null;
  return {
    kind: "armament",
    id: `arm:${item.slug}`,
    itemSlug: item.slug,
    prompt: prompt("prompt.armament", { name: item.name }),
    options,
    answer: item.armament,
  };
}

/**
 * Words that carry no identifying weight, so sharing one between a name and an
 * aka does not give an answer away.
 */
const GENERIC_WORDS = new Set([
  "class",
  "project",
  "obr",
  "mod",
  "modernisation",
  "variant",
  "system",
  "vehicle",
  "carrier",
  "launcher",
  "bridge",
  "radar",
  "the",
  "and",
]);

/** Identifying words in a designation, lowercased and stripped of punctuation. */
function designationTokens(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 2 && !GENERIC_WORDS.has(token));
}

function squash(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * True when the prompt simply contains the answer — "Forpost-R" asked of
 * "Forpost". Nothing is being tested at that point.
 */
function spellsOutAnswer(aka: string, name: string): boolean {
  const a = squash(aka);
  const n = squash(name);
  if (!a || !n) return false;
  return a.includes(n) || n.includes(a);
}

/**
 * True when the right option can be picked out by a word it alone shares with
 * the subject of the question — "152 mm 2A65 howitzer" offered for the 2A65
 * Msta-B, against three options that mention no gun designation at all. The
 * learner matches the string instead of knowing the answer.
 *
 * Sharing a word is only unfair when nothing else shares it. Where several
 * options carry the same word the shortcut disappears, which is what keeps the
 * rank ladder honest.
 */
function optionGivesItselfAway(subject: string, answer: string, others: string[]): boolean {
  const subjectTokens = new Set(designationTokens(subject));
  const shared = designationTokens(answer).filter((token) => subjectTokens.has(token));
  if (shared.length === 0) return false;
  return !others.some((other) => designationTokens(other).some((token) => shared.includes(token)));
}

/**
 * Designation recall: given the common or NATO name, pick the local one.
 *
 * This is the only recognition question a photograph-less block can offer, and
 * for ranks it is the substance of the subject — knowing that a polkovnik is a
 * colonel is the point.
 *
 * The difficulty is that an aka often shares wording with the name it belongs
 * to, and a shared word can hand over the answer. Two rules keep the question
 * honest. An aka that contains the name outright is rejected: no amount of
 * distractor choice rescues "Forpost-R" asked of "Forpost". Otherwise, where
 * the aka shares an identifying word with its own name, at least one distractor
 * must share that word too — which is why the ranks ladder survives, since
 * General-Mayor, General-Leytenant and General-Polkovnik all answer to
 * "General", and the learner still has to know which.
 */
export function designationQuestion(item: Item, pool: Item[]): Question | null {
  if (!item.aka) return null;
  if (spellsOutAnswer(item.aka, item.name)) return null;

  const others = pool.filter((i) => i.slug !== item.slug);
  if (others.length < 3) return null;

  const akaTokens = new Set(designationTokens(item.aka));
  const giveaways = designationTokens(item.name).filter((token) => akaTokens.has(token));

  // Distractors are ranked, not taken at random. Anything sharing a giveaway
  // word comes first, because that word then stops being a shortcut. Then come
  // items filling the same role, so a naval rank is offered against other naval
  // ranks rather than against junior soldiers — the question should turn on
  // which captain it is, not on spotting the only captain-shaped word.
  const ladder = item.placements[0];
  const sharesGiveaway = (other: Item) =>
    giveaways.length > 0 && designationTokens(other.name).some((t) => giveaways.includes(t));
  const sameRole = (other: Item) => ladder !== undefined && other.placements[0] === ladder;

  if (giveaways.length > 0 && !others.some(sharesGiveaway)) return null;

  const distractors = [
    ...shuffle(others.filter((i) => sharesGiveaway(i))),
    ...shuffle(others.filter((i) => !sharesGiveaway(i) && sameRole(i))),
    ...shuffle(others.filter((i) => !sharesGiveaway(i) && !sameRole(i))),
  ];

  const names = distractors.map((i) => i.name);
  if (names.length < 3) return null;

  const chosen = [...new Set(names)].filter((n) => n !== item.name).slice(0, 3);
  if (chosen.length < 3) return null;

  return {
    kind: "designation",
    id: `desig:${item.slug}`,
    itemSlug: item.slug,
    prompt: prompt("prompt.designation", { aka: item.aka }),
    options: shuffle([item.name, ...chosen]),
    answer: item.name,
  };
}

/**
 * Seniority, for blocks whose items form a sequence. Distractors are drawn from
 * the same ladder so the question tests order rather than telling ground and
 * naval ranks apart.
 */
export function seniorityQuestion(item: Item, pool: Item[]): Question | null {
  const ladder = item.placements[0];
  if (!ladder) return null;
  const sameLadder = pool.filter((i) => i.placements[0] === ladder && i.slug !== item.slug);
  const juniors = sameLadder.filter((i) => i.sort < item.sort);
  if (juniors.length < 3) return null;
  return {
    kind: "seniority",
    id: `senior:${item.slug}`,
    itemSlug: item.slug,
    prompt: prompt("prompt.seniority"),
    options: pickDistractors(
      [
        ...shuffle(juniors)
          .slice(0, 3)
          .map((i) => i.name),
        item.name,
      ],
      item.name,
      3,
    ),
    answer: item.name,
  };
}

export function buildPhotoQuiz(blockSlugs: string[] | undefined, length = 12): Question[] {
  const pool = photoItems(blockSlugs);
  const questions: Question[] = [];
  for (const item of shuffle(pool)) {
    const samePool = pool.filter((i) => i.blockSlug === item.blockSlug);
    const question = photoQuestion(item, samePool.length >= 4 ? samePool : pool);
    if (question) questions.push(question);
    if (questions.length >= length) break;
  }
  return questions;
}

export function buildPlacementQuiz(blockSlugs: string[] | undefined, length = 12): Question[] {
  const pool = studyableItems(blockSlugs);
  const placements = allPlacements(blockSlugs);
  const questions: Question[] = [];
  for (const item of shuffle(pool)) {
    const question = placementQuestion(item, placements);
    if (question) questions.push(question);
    if (questions.length >= length) break;
  }
  return questions;
}

/** Mixed block exam: recognition first, then employment knowledge. */
export function buildExam(blockSlug: string, length = 16): Question[] {
  const pool = studyableItems([blockSlug]);
  const photos = pool.filter((i) => i.imageUrl);
  const placements = allPlacements([blockSlug]);
  const block = getBlock(blockSlug);
  const questions: Question[] = [];

  for (const item of shuffle(photos)) {
    const question = photoQuestion(item, photos);
    if (question) questions.push(question);
  }
  for (const item of shuffle(pool)) {
    const question = armamentQuestion(item, pool);
    if (question) questions.push(question);
  }
  for (const item of shuffle(pool)) {
    const question = placementQuestion(item, placements);
    if (question) questions.push(question);
  }
  for (const item of shuffle(pool)) {
    const question = designationQuestion(item, pool);
    if (question) questions.push(question);
  }
  if (block?.ordered) {
    for (const item of shuffle(pool)) {
      const question = seniorityQuestion(item, pool);
      if (question) questions.push(question);
    }
  }

  const seen = new Set<string>();
  const unique = questions.filter((q) => !seen.has(q.id) && seen.add(q.id));
  return shuffle(unique).slice(0, Math.min(length, unique.length));
}

export const PASS_RATIO = 0.8;
