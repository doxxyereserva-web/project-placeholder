import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("returns an empty string for null inputs", () => {
    expect(cn(null, undefined, false)).toBe("");
  });

  it("merges classes while ignoring null inputs", () => {
    expect(cn("px-2", null, "px-4")).toBe("px-4");
  });
});