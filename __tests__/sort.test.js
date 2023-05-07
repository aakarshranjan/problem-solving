const {
  bubbleSortAsc,
  bubbleSortDesc,
} = require("../src/problems/sorting/algo/bubbleSort");
const {
  selectionSortAsc,
  selectionSortDesc,
} = require("../src/problems/sorting/algo/selectionSort");
const {
  insertionSortAsc,
  insertionSortDesc,
} = require("../src/problems/sorting/algo/insertionSort");
const mergeSort = require("../src/problems/sorting/algo/mergeSort");
const quickSort = require("../src/problems/sorting/algo/quickSort");
const heapSort = require("../src/problems/sorting/algo/heapSort");
const {
  binarySearch,
  binarySearchRc,
} = require("../src/problems/sorting/algo/binarySearch");

describe("sorting tests", () => {
  it("simple array", () => {
    const arr = [5, 7, 2, 1, 4];
    expect(bubbleSortAsc(arr)).toEqual([1, 2, 4, 5, 7]);
    expect(bubbleSortDesc(arr)).toEqual([7, 5, 4, 2, 1]);
    expect(selectionSortAsc(arr)).toEqual([1, 2, 4, 5, 7]);
    expect(selectionSortDesc(arr)).toEqual([7, 5, 4, 2, 1]);
    expect(insertionSortAsc(arr)).toEqual([1, 2, 4, 5, 7]);
    expect(insertionSortDesc(arr)).toEqual([7, 5, 4, 2, 1]);
    expect(mergeSort(arr, "asc")).toEqual([1, 2, 4, 5, 7]);
    expect(mergeSort(arr, "desc")).toEqual([7, 5, 4, 2, 1]);
    expect(quickSort(arr, "asc")).toEqual([1, 2, 4, 5, 7]);
    expect(quickSort(arr, "desc")).toEqual([7, 5, 4, 2, 1]);
    expect(heapSort(arr)).toEqual([1, 2, 4, 5, 7]);
  });
});

describe("searching tests", () => {
  it("simple array search", () => {
    const arr = [1, 2, 6, 24, 34];
    expect(binarySearch(arr, 24)).toBe(4);
    expect(binarySearchRc(arr, 24)).toBe(4);
  });
});
