import { allPlacements, getBlock, photoItems, studyableItems, type Item } from "@/lib/content";

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
    prompt: "Identify this equipment.",
    options: pickDistractors([...names, item.name], item.name, 3),
    answer: item.name,
  };
}

export function placementQuestion(item: Item, placementPool: string[]): Question | null {
  const answer = item.placements[0];
  if (!answer) return null;
  const pool = placementPool.filter((p) => !item.placements.includes(p));
  if (pool.length < 3) return null;
  return {
    kind: "placement",
    id: `place:${item.slug}`,
    itemSlug: item.slug,
    prompt: `Where is the ${item.name} normally found?`,
    options: pickDistractors([...pool, answer], answer, 3),
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
  return {
    kind: "armament",
    id: `arm:${item.slug}`,
    itemSlug: item.slug,
    prompt: `What is the main armament of the ${item.name}?`,
    options: pickDistractors([...others, item.armament], item.armament, 3),
    answer: item.armament,
  };
}

/**
 * Designation recall: given the common or NATO name, pick the local one.
 *
 * This is the only recognition question a photograph-less block can offer, and
 * for ranks it is the substance of the subject — knowing that a polkovnik is a
 * colonel is the point.
 */
export function designationQuestion(item: Item, pool: Item[]): Question | null {
  if (!item.aka) return null;
  const names = pool.filter((i) => i.slug !== item.slug).map((i) => i.name);
  if (names.length < 3) return null;
  return {
    kind: "designation",
    id: `desig:${item.slug}`,
    itemSlug: item.slug,
    prompt: `Which designation is also known as "${item.aka}"?`,
    options: pickDistractors([...names, item.name], item.name, 3),
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
    prompt: `Which of these is the most senior rank?`,
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
