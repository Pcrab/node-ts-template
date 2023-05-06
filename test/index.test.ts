import { describe, it } from "node:test";
import assert from "node:assert";

import { template } from "../src";

describe("Test", () => {
    it("test", () => {
        assert.strictEqual(1, 1);
        assert.deepStrictEqual(template, {});
    });
});
