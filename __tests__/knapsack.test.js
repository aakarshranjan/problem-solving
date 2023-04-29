const {
  knapsack01Recursive,
  knapsack01Memoize,
  knapsackTopDown,
} = require("../src/problems/dynamic-programming/knapsack/concept-0-1");

const subsetSum = require("../src/problems/dynamic-programming/knapsack/derivatives/subsetSum");

describe("Knapsack 0-1 Concept tests", () => {
  it("simple values in the weight and value array", () => {
    const weightArr = [1, 2, 3, 4, 5];
    const valArr = [1, 2, 3, 4, 5];
    const W = 10;
    const n = 5;

    expect(knapsack01Recursive(weightArr, valArr, W, n)).toBe(10);
    expect(knapsack01Memoize(weightArr, valArr, W, n)).toBe(10);
    expect(knapsackTopDown(weightArr, valArr, W, n)).toBe(10);
  });

  it("empty value in arrays", () => {
    const weightArr = [];
    const valArr = [];
    const W = 10;
    const n = 0;

    expect(knapsack01Recursive(weightArr, valArr, W, n)).toBe(0);
    expect(knapsack01Memoize(weightArr, valArr, W, n)).toBe(0);
    expect(knapsackTopDown(weightArr, valArr, W, n)).toBe(0);
  });

  it("capacity is 0", () => {
    const weightArr = [1, 2, 3, 4, 5];
    const valArr = [1, 2, 3, 4, 5];
    const W = 0;
    const n = 5;

    expect(knapsack01Recursive(weightArr, valArr, W, n)).toBe(0);
    expect(knapsack01Memoize(weightArr, valArr, W, n)).toBe(0);
    expect(knapsackTopDown(weightArr, valArr, W, n)).toBe(0);
  });

  it("Random values", () => {
    const weightArr = [10, 22, 13, 14, 25, 8];
    const valArr = [15, 12, 30, 24, 8, 45];
    const W = 30;
    const n = 6;

    expect(knapsack01Recursive(weightArr, valArr, W, n)).toBe(75);
    expect(knapsack01Memoize(weightArr, valArr, W, n)).toBe(75);
    expect(knapsackTopDown(weightArr, valArr, W, n)).toBe(75);
  });
});

describe("Knapsack Derivatives tests", () => {
  it("simple values in arr - should return true", () => {
    const arr = [1, 2, 4, 5];
    const sum = 10;
    const n = 4;

    expect(subsetSum(arr, sum, n)).toBe(true);
  });

  it("empty value in arrays", () => {
    const arr = [];
    const sum = 10;
    const n = 0;

    expect(subsetSum(arr, sum, n)).toBe(false);
  });

  it("sum is 0", () => {
    const arr = [1, 2, 3, 4, 5];
    const sum = 0;
    const n = 5;

    expect(subsetSum(arr, sum, n)).toBe(true);
  });

  it("simple values in arr - should return false", () => {
    const arr = [100, 122, 34, 45, 512];
    const sum = 1000;
    const n = 5;

    expect(subsetSum(arr, sum, n)).toBe(false);
  });

  it("multiple possibilities to get the sum in arr - should return true", () => {
    const arr = [1, 2, 3, 4, 5];
    const sum = 10;
    const n = 6;

    expect(subsetSum(arr, sum, n)).toBe(true);
  });
});
