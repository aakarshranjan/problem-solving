/*
    This sort involves taking a pivot and then doing a partition of the array around the pivot
    so that the pivot gets in its correct position, meaning every element on the left side of it
    will be smaller than it(considering ascending sort) and every element on the right side of it
    will be greater than it.
    We then repeat the process again with the other 2 sides of the pivot by recursion until our
    array gets sorted.

    This is an inplace sorting, meaning we sort in the same array without using an extra array in
    memory for storing data. So space complexity is less than merge sort.

    We have a flag i which points to the index(place) in the array where the pivot should go.
    Initially it is set as low - 1, meaning that there is no place yet(no smaller element than
    pivot found yet). Once we find an element smaller than the element, we increment the flag and
    swap the current element with the element at the flag index.
    During partioning around the pivot we have to swap elements so that the pivot gets to its
    proper place. To do that we do swapping 2 times: internal and external.
    Internal swapping is done inside the loop when the current element is less than the pivot.
    We then swap the current element with the element present at the flag index.
    External swapping is done to swap the place of the pivot with the element present just after
    the flag index.

    Time complexity(Avg) - O(n*log(n))
    Time complexity(worst) - O(n^2)
*/

function swap(arr, idx1, idx2) {
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

function partition(arr, low, high, sortOrder) {
  var pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (sortOrder == "asc" && arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
    if (sortOrder == "desc" && arr[j] > pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function sort(arr, low, high, sortOrder) {
  if (low < high) {
    var pivotIndex = partition(arr, low, high, sortOrder);
    sort(arr, low, pivotIndex - 1, sortOrder);
    sort(arr, pivotIndex + 1, high, sortOrder);
  }
}

function quickSort(arr, sortOrder) {
  sort(arr, 0, arr.length - 1, sortOrder);
  return arr;
}

module.exports = quickSort;
