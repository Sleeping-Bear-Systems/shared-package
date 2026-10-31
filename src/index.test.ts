import assert from "node:assert";
import describe, { test } from "node:test";
import { sum } from "./index.ts";

describe("sum", () => {
  test("validate", () => {
    const value = sum(1, 2);
    assert.strictEqual(value, 3);
  });
});
