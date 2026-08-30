/**
 * Content model for the study material.
 *
 * Lives apart from the entry data so per-block item files can import the types
 * without a circular dependency on the module that aggregates them.
 */

export type Block = {
  slug: string;
  ordinal: number;
  title: string;
  subtitle: string | null;
  brief: string | null;
  doctrineNote: string | null;
  status: "ready" | "wip";
  /**
   * Items in this block form a meaningful sequence — rank seniority — so the
   * exam can ask ordering questions that the recognition types cannot cover.
   * Ranks carry no armament and only two placements, so without this its exam
   * would lean entirely on designation questions.
   */
  ordered?: boolean;
  /**
   * How this block's imagery should sit in its frame. Vehicle photographs are
   * landscape and fill the 16:9 slots, but rank insignia are tall portrait
   * shoulder boards — cropping those to fill would cut away the stars and
   * stripes that identify the rank.
   */
  imageFit?: "cover" | "contain";
};

export type Item = {
  slug: string;
  blockSlug: string;
  name: string;
  aka: string | null;
  imageUrl: string | null;
  /** Overrides the block's fit, for a photograph the block's crop would spoil. */
  imageFit?: "cover" | "contain";
  imageCredit: string | null;
  imagePage: string | null;
  armament: string | null;
  rangeText: string | null;
  /** 3–5 short "what to look at" points. Recognition before specification. */
  cues: string[];
  /** Where the thing actually sits in the force. One or more. */
  placements: string[];
  doctrineNote: string | null;
  crew: string | null;
  service: string | null;
  sort: number;
};
