/*
    In Insertion sort, we can assume the array to have 2 parts: sorted and unsorted
    Each time we pick an element from the unsorted side and place it in correct place on
    the sorted side by comparing the elements in a loop.
    In the beginning, we assume the sorted side of the array to be the first element of the
    array.
    Then each time, we iterate over the unsorted side of the array, pick the first element on that
    side, and then iterate backwards of the sorted side and compare elements with each iteration
    and put the unsorted element at the right place.
    We can think that in the sorted side, each time we compare the element with the unsorted 
    element and the unsorted element is smaller, we just store the unsorted element in a variable
    and then keep on shifting the position of the sorted elements towards right till the unsorted
    element is smaller than elements on the sorted side (we do not swap the elements, we are
    just shifting 1 position at a time towards right so that an empty place is available in
    the left side). Later on we assign the value of the unsorted element which we stored in a 
    variable into the empty place.

    Time complexity - O(n^2)
*/

function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var j = i - 1; //last index of the sorted side of array
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j]; //shift the largest sorted element to the right
      j--; //continue with checking the next element of the sorted side of the array
    }
    arr[j + 1] = cur; //place the current unsorted element in the empty space
  }
  return arr;
}

function insertionSortDesc(arr) {
  for (let i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var j = i - 1;
    while (j >= 0 && cur > arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
}

module.exports = {
  insertionSortAsc,
  insertionSortDesc,
};
