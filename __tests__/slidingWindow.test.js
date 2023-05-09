const {
  maxSumSubArray,
  firstNegativeInteger,
  countAnagrams,
  maxSubArrayEl,
} = require("../src/problems/sliding-window/fixedSizeProblems");

describe("sliding window tests", () => {
  it("simple ascending array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(maxSumSubArray(arr, 3)).toBe(12);
    expect(maxSubArrayEl(arr, 3)).toEqual([3, 4, 5]);
  });
  it("random array", () => {
    const arr = [23, 5, 40, 15, 3, 20, 16];
    expect(maxSumSubArray(arr, 3)).toBe(68);
    expect(firstNegativeInteger(arr, 3)).toEqual([0, 0, 0, 0, 0]);
    expect(maxSubArrayEl(arr, 3)).toEqual([40, 40, 40, 20, 20]);
  });
  it("first negative integer test", () => {
    const arr = [23, -5, -40, 15, 3, -20, 16, 2, 4];
    expect(firstNegativeInteger(arr, 3)).toEqual([
      -5, -5, -40, -20, -20, -20, 0,
    ]);
    expect(maxSubArrayEl(arr, 3)).toEqual([23, 15, 15, 15, 16, 16, 16]);
  });
  it("count anagrams test", () => {
    const str = "aabaabaa";
    expect(countAnagrams(str, "aaba")).toBe(4);
  });
});
