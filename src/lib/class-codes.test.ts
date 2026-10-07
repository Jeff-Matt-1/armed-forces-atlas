import { describe, expect, test } from "bun:test";

import {
  CODE_ALPHABET,
  CODE_LENGTH,
  checkCharacter,
  formatSeatCode,
  generateSeatCode,
  isSeatCode,
  normaliseSeatCode,
  seatEmail,
  seatPassword,
} from "@/lib/class-codes";

/** The regular expression the database's CHECK constraint uses. */
const DATABASE_CONSTRAINT = /^[2-9A-HJKMNP-Z]{8}$/;

describe("the alphabet", () => {
  test("has 31 glyphs and no confusable pair", () => {
    expect(CODE_ALPHABET.length).toBe(31);
    for (const excluded of ["0", "1", "O", "I", "L"]) {
      expect(CODE_ALPHABET).not.toContain(excluded);
    }
  });

  test("matches what the database will accept", () => {
    for (const character of CODE_ALPHABET) {
      expect(character.repeat(CODE_LENGTH)).toMatch(DATABASE_CONSTRAINT);
    }
  });
});

describe("generated codes", () => {
  const codes = Array.from({ length: 500 }, generateSeatCode);

  test("are well formed and self-checking", () => {
    for (const code of codes) {
      expect(code).toHaveLength(CODE_LENGTH);
      expect(code).toMatch(DATABASE_CONSTRAINT);
      expect(isSeatCode(code)).toBe(true);
    }
  });

  test("do not repeat", () => {
    expect(new Set(codes).size).toBe(codes.length);
  });

  test("use the whole alphabet", () => {
    const seen = new Set(codes.join(""));
    expect(seen.size).toBe(CODE_ALPHABET.length);
  });
});

describe("the check character", () => {
  test("catches every single substituted character", () => {
    const code = generateSeatCode();
    for (let position = 0; position < CODE_LENGTH; position += 1) {
      for (const replacement of CODE_ALPHABET) {
        if (replacement === code[position]) continue;
        const typo = code.slice(0, position) + replacement + code.slice(position + 1);
        expect(isSeatCode(typo)).toBe(false);
      }
    }
  });

  test("catches two adjacent characters swapped", () => {
    // Only codes that actually have an adjacent pair to swap; a repeated pair
    // is unchanged by swapping it and cannot be a detectable error.
    for (let attempt = 0; attempt < 200; attempt += 1) {
      const code = generateSeatCode();
      for (let position = 0; position < CODE_LENGTH - 1; position += 1) {
        if (code[position] === code[position + 1]) continue;
        const swapped =
          code.slice(0, position) + code[position + 1] + code[position] + code.slice(position + 2);
        expect(isSeatCode(swapped)).toBe(false);
      }
    }
  });

  test("rejects a body character outside the alphabet", () => {
    expect(() => checkCharacter("ABCDEF0")).toThrow();
  });
});

describe("reading a code back", () => {
  test("forgives the grouping, the spaces and the case", () => {
    const code = generateSeatCode();
    const grouped = formatSeatCode(code);
    expect(normaliseSeatCode(grouped)).toBe(code);
    expect(normaliseSeatCode(grouped.toLowerCase())).toBe(code);
    expect(normaliseSeatCode(` ${grouped.slice(0, 4)} ${grouped.slice(5)} `)).toBe(code);
  });

  test("does not silently drop an unrecognised character", () => {
    // Dropping it would shorten the code, and a shortened code that still
    // checked out would send the trainee to someone else's seat.
    const code = generateSeatCode();
    expect(isSeatCode(normaliseSeatCode(`${code}*`))).toBe(false);
    expect(isSeatCode(normaliseSeatCode(code.replace(code[2]!, "0")))).toBe(false);
  });

  test("rejects the wrong length", () => {
    const code = generateSeatCode();
    expect(isSeatCode(code.slice(1))).toBe(false);
    expect(isSeatCode(code + code[0])).toBe(false);
    expect(isSeatCode("")).toBe(false);
  });
});

describe("the derived account", () => {
  test("gives the same address for the same code and a different one otherwise", async () => {
    const first = generateSeatCode();
    const second = generateSeatCode();
    expect(await seatEmail(first)).toBe(await seatEmail(first));
    expect(await seatEmail(first)).not.toBe(await seatEmail(second));
  });

  test("does not carry the code in the address", async () => {
    const code = generateSeatCode();
    const address = await seatEmail(code);
    expect(address).not.toContain(code);
    expect(address).not.toContain(code.toLowerCase());
    expect(address).toMatch(/^seat-[0-9a-f]{16}@/);
  });

  test("derives a password that carries the code and survives a stricter policy", () => {
    const code = generateSeatCode();
    const password = seatPassword(code);
    expect(password.startsWith(code)).toBe(true);
    expect(password.length).toBeGreaterThan(CODE_LENGTH);
    expect(password).toMatch(/[a-z]/);
  });
});
