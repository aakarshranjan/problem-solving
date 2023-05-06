/*
    In Bubble sort, we compare each element of the array with every other element.
    Let's assume we have to sort array into ascending. Then we compare each element with the 
    next one and if it is greater, we swap it so that the larger element gets pushed to the back
    of the array. If not, we continue with the next iteration and again check if the current 
    element is greater than the next element. After each iteration, the greatest element gets
    pushed to the back of the array. So we do not need to check the last element for comparison.

    Time complexity - O(n^2)
*/

function bubbleSortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

function bubbleSortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

module.exports = {
  bubbleSortAsc,
  bubbleSortDesc,
};
