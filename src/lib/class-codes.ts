/**
 * Seat codes.
 *
 * A trainee joins a class by typing one eight-character code and nothing else.
 * The code is the whole credential: the account behind it has an email derived
 * from the code's hash and a password derived from the code itself, so the same
 * code on a second device reaches the same account with nothing stored and
 * nothing to recover. There is no SMTP and no password reset, which is exactly
 * why the credential has to be reconstructible rather than remembered.
 *
 * Three properties the format has to have, in order of how much they cost when
 * missing:
 *
 * 1. It must survive being printed and read back. The alphabet drops 0, 1, O,
 *    I and L, so no glyph on the sheet has a twin.
 * 2. A single mistyped character must fail on the device. The last character is
 *    a checksum over the other seven — without it a typo becomes a round trip
 *    that ends in a new empty account, because the client has to be signed in
 *    before it can ask whether a code exists.
 * 3. It must be short enough to type thirty times in a classroom.
 */

/** 31 glyphs: digits 2–9 and A–Z without O, I or L. */
export const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

export const CODE_LENGTH = 8;

/** The first seven characters are random; the eighth checks them. */
const BODY_LENGTH = CODE_LENGTH - 1;

/**
 * Weighted sum modulo the alphabet size, which is prime.
 *
 * A distinct weight per position and a prime modulus is what makes both common
 * mistakes detectable: any single substituted character shifts the sum by
 * value × weight, which cannot be zero, and any transposition of two different
 * characters shifts it by their difference times the difference of the weights,
 * which cannot be zero either.
 */
export function checkCharacter(body: string): string {
  let sum = 0;
  for (let i = 0; i < body.length; i += 1) {
    const value = CODE_ALPHABET.indexOf(body[i]!);
    if (value < 0) throw new Error(`character outside the code alphabet: ${body[i]}`);
    sum += value * (i + 2);
  }
  return CODE_ALPHABET[sum % CODE_ALPHABET.length]!;
}

/**
 * Rejection sampling rather than a modulo of a random byte: 256 is not a
 * multiple of 31, so folding would make the first eight glyphs likelier than
 * the rest and shave entropy off every code.
 */
function randomBody(): string {
  const out: string[] = [];
  const buffer = new Uint8Array(BODY_LENGTH * 2);
  while (out.length < BODY_LENGTH) {
    crypto.getRandomValues(buffer);
    for (const byte of buffer) {
      if (byte >= 248) continue; // 248 = 31 × 8, the largest usable multiple
      out.push(CODE_ALPHABET[byte % CODE_ALPHABET.length]!);
      if (out.length === BODY_LENGTH) break;
    }
  }
  return out.join("");
}

export function generateSeatCode(): string {
  const body = randomBody();
  return body + checkCharacter(body);
}

/**
 * What the trainee typed, reduced to what the database stores.
 *
 * Spaces and dashes are removed because the code is shown grouped, and the
 * grouping is a reading aid rather than part of the value. Nothing else is
 * removed: silently dropping an unrecognised character would shorten the code
 * and turn a typo into a different valid-looking one.
 */
export function normaliseSeatCode(input: string): string {
  return input.replace(/[\s-]+/g, "").toUpperCase();
}

export function isSeatCode(code: string): boolean {
  if (code.length !== CODE_LENGTH) return false;
  for (const character of code) {
    if (!CODE_ALPHABET.includes(character)) return false;
  }
  return checkCharacter(code.slice(0, BODY_LENGTH)) === code[BODY_LENGTH];
}

/** Grouped in fours for reading aloud and copying off a sheet. */
export function formatSeatCode(code: string): string {
  return `${code.slice(0, 4)}-${code.slice(4)}`;
}

/**
 * The account's address, derived from the code rather than containing it.
 *
 * A hash, so the address list in the auth table gives away no codes even to
 * whoever can read it. No mail is ever sent here; email confirmation is off and
 * the subdomain exists only to make the addresses well-formed and obviously
 * synthetic.
 */
export async function seatEmail(code: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 16);
  return `seat-${hex}@seats.armed-forces-atlas.workers.dev`;
}

/**
 * The suffix is insurance, not secrecy. The code alone satisfies today's
 * minimum length, but a project that later demands mixed case or a symbol
 * would otherwise break every join at once, including for seats already
 * issued on paper.
 */
export function seatPassword(code: string): string {
  return `${code}-afa`;
}
