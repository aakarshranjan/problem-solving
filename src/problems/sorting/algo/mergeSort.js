/*
    Merge sort is a divide and conquer method.
    It means that we split the array continuiously till it reaches atomic(singular element).
    All this is achieved by recursion
    Actually, we split it till the array is of size 2 and then call again call the split method
    by recursion but we have a base condition in place and cuz of that we do not split further.
    Then the sub array of size 2 is sorted by another function.
    This process is continuously done by recursion and all subarrays starting from size 2 are 
    sorted leading to the entire array getting sorted.

    Time complexity - O(n*log(n))
*/

function merge(arr, leftIndex, midIndex, rightIndex, sortOrder) {
  /* The subarray from leftIndex till midIndex is sorted and the subarray from midIndex+1 to
       rightIndex is sorted.
       We only need to sort the 2 sorted subarrays with each other into a single array.
       In the beginning we get only a subarray of 2, so the left and right sides can be considered
       as sorted individually and we just need to sort the 2 sides with each other.
       With this, the subarray size eventually grows having the 2 sides sorted individually
       and we sort those 2 sides with each other
    */

  let leftArrSize = midIndex - leftIndex + 1;
  let rightArrSize = rightIndex - midIndex;
  let leftSortedArr = [];
  let rightSortedArr = [];

  for (let i = 0; i < leftArrSize; i++) {
    leftSortedArr[i] = arr[leftIndex + i];
  }
  for (let i = 0; i < rightArrSize; i++) {
    rightSortedArr[i] = arr[midIndex + 1 + i];
  }

  //merge
  let i = 0,
    j = 0,
    k = leftIndex;
  while (i < leftArrSize && j < rightArrSize) {
    if (sortOrder == "asc") {
      if (leftSortedArr[i] <= rightSortedArr[j]) {
        arr[k++] = leftSortedArr[i++];
      } else {
        arr[k++] = rightSortedArr[j++];
      }
    } else {
      if (leftSortedArr[i] >= rightSortedArr[j]) {
        arr[k++] = leftSortedArr[i++];
      } else {
        arr[k++] = rightSortedArr[j++];
      }
    }
  }

  //incase both have different sizes, copy any extra elements into the original array.
  while (i < leftArrSize) {
    arr[k++] = leftSortedArr[i++];
  }
  while (j < rightArrSize) {
    arr[k++] = rightSortedArr[j++];
  }
}

function sort(arr, leftIndex, rightIndex, sortOrder) {
  if (leftIndex < rightIndex) {
    let midIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2); //index of the mid element
    sort(arr, leftIndex, midIndex, sortOrder);
    sort(arr, midIndex + 1, rightIndex, sortOrder);
    merge(arr, leftIndex, midIndex, rightIndex, sortOrder);
  }
}

function mergeSort(arr, sortOrder) {
  sort(arr, 0, arr.length - 1, sortOrder);
  return arr;
}

module.exports = mergeSort;
