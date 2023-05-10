const {
  maxSumSubArray,
  firstNegativeInteger,
  countAnagrams,
  maxSubArrayEl,
} = require("../src/problems/sliding-window/fixedSizeProblems");

const {
  largestSubarraySum,
  longestSubstrSomeUniqueChar,
  longestSubStrAllUniqueChar,
  minimumWindowSubstr,
} = require("../src/problems/sliding-window/variableSizeProblems");

describe("fixed sliding window tests", () => {
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

describe("variable sliding window tests", () => {
  it("simple ascending array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(largestSubarraySum(arr, 4)).toBe(1);
  });
  it("random array", () => {
    const arr = [1, 8, 2, 1, 1, 4, 2, 5, 1, 1];
    expect(largestSubarraySum(arr, 4)).toBe(3);
  });
  it("longest subarray of unique chars", () => {
    const str = "aabcaabdedfdcffchfcc";
    expect(longestSubstrSomeUniqueChar(str, 3)).toBe(8);
    expect(longestSubStrAllUniqueChar(str, 3)).toBe(4);
    const str1 = "aabcaabde";
    expect(longestSubstrSomeUniqueChar(str1, 3)).toBe(7);
    expect(longestSubStrAllUniqueChar(str1, 3)).toBe(4);
    const str2 = "peekqw";
    expect(longestSubstrSomeUniqueChar(str2, 3)).toBe(4);
    expect(longestSubStrAllUniqueChar(str2, 3)).toBe(4);
  });
  it("minimum substring problem", () => {
    const str = "ADKTAPCTKPD";
    const ptr = "ADP";
    expect(minimumWindowSubstr(str, ptr)).toBe(5);
    const str1 = "totmtaptat";
    const ptr1 = "tta";
    expect(minimumWindowSubstr(str1, ptr1)).toBe(3);
  });
});
