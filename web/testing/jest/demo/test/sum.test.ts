import { describe, expect, test } from "@jest/globals";
import { sum, sub, mult, div } from "../src/sum";

describe("math module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("subs 2 - 2 to equal 0", () => {
    expect(sub(2, 2)).toBe(0);
  });

  test("mult 3 * 3 to equal 9", () => {
    expect(mult(3, 3)).toBe(9);
  });

  test("div 10 / 2 to equal 5", () => {
    expect(div(10, 2)).toBe(5);
  });
});
