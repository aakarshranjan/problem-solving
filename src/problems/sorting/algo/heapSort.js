/*
    In this, we create a complete binary tree following min heap or max heap, and the we can sort
    the array.
    Time complexity - O(n*log(n))
*/

function heapify(arr, N, i) {
  var lc = 2 * i + 1;
  var rc = 2 * i + 2;
  if (!arr[lc] && !arr[rc]) return;

  let maxCI = i;
  if (lc < N && arr[lc] > arr[maxCI]) maxCI = lc;
  if (rc < N && arr[rc] > arr[maxCI]) maxCI = rc;

  if (maxCI != i) {
    let tmp = arr[maxCI];
    arr[maxCI] = arr[i];
    arr[i] = tmp;
    heapify(arr, N, maxCI);
  }
}

function sort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  //sort the array by removing the top(largest) element to the end
  for (let i = arr.length - 1; i > 0; i--) {
    var tmp = arr[i];
    arr[i] = arr[0];
    arr[0] = tmp;

    heapify(arr, i, 0);
  }
}

function heapSort(arr) {
  sort(arr);
  return arr;
}

var array = heapSort([4, 6, 3, 5, 1, 2]);
console.log(array);

module.exports = heapSort;
