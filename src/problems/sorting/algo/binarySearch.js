/*
    We need to search a given element in the array.
    For this approach, the prerequisite is array must be sorted.
    We divide the array into subarrays and check in the subarrays if the element is present.

    Time complexity best case - O(1) : incase the element we are looking for is the middle element.
    Time complexity wrost case - O(log(n))
*/

function binarySearch(arr, key) {
  let lo = 0,
    hi = arr.length - 1;

  while (lo <= hi) {
    let mid = parseInt((lo + hi) / 2);
    if (arr[mid] == key) return mid + 1;
    else if (arr[mid] < key) lo = mid + 1;
    else hi = mid - 1;
  }
  return 0;
}

function binarySearchRecursive(arr, lo, hi, key) {
  if (lo == hi) {
    if (arr[lo] == key) return lo + 1;
    else return 0;
  } else {
    let mid = parseInt((lo + hi) / 2);
    if (arr[mid] == key) return mid + 1;
    else if (arr[mid] < key)
      return binarySearchRecursive(arr, mid + 1, hi, key);
    else return binarySearchRecursive(arr, lo, mid - 1, key);
  }
}

function binarySearchRc(arr, key) {
  return binarySearchRecursive(arr, 0, arr.length - 1, key);
}

module.exports = { binarySearch, binarySearchRc };
