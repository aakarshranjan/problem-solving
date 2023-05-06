/*
    In Selection sort, assuming we have to sort array in ascending, for each iteration,
    we get the smallest element and swap it with the element present in the beginning of the
    array which is unsorted. For first iteration, the first element gets swapped with 
    smallest. For second iteration, the second element gets swapped with second smallest and
    so on). In the end the loop gets sorted.
    After each iteration, the starting portion of the array gets sorted so we take counters
    accordingly.

    In Bubble sort, we have swapping with every inner loop iteration.
    In Selection sort, we only get the smallest element with the entire inner loop iteration,
    and we swap only once per outer loop iteration.

    Time complexity - O(n^2)
*/

function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) smallest = j;
    }
    let tmp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = tmp;
  }
  return arr;
}

function selectionSortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let largest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[largest] < arr[j]) largest = j;
    }
    let tmp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = tmp;
  }
  return arr;
}

module.exports = {
  selectionSortAsc,
  selectionSortDesc,
};
