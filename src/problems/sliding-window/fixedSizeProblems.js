/*
    In this, we have to find the max sum of sub array of size 3.
    Example: [3,6,4,9,1,5,2] -> 19 is max of [6,4,9]
*/

function maxSumSubArray(arr, n) {
  let max = null,
    sum = null;
  let i = 0,
    j = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (j - i + 1 == n) {
      if (sum > max) max = sum;
      sum -= arr[i];
      i++;
    }
    j++;
  }
  return max;
}

//first negative integer in every subarray of size n
function firstNegativeInteger(arr, n) {
  let i = 0,
    j = 0;

  var negativeArr = [];
  var ans = [];
  while (j < arr.length) {
    //add negative number to an array
    if (arr[j] < 0) negativeArr.push(arr[j]);

    if (j - i + 1 == n) {
      //window size reached
      if (negativeArr.length) {
        //negative array contains element
        ans.push(negativeArr[0]);
        if (arr[i] == negativeArr[0]) {
          //remove the first negative element from the array if it matches
          negativeArr.shift();
        }
      }
      //negative array is empty
      else ans.push(0);
      i++;
    }
    j++;
  }
  return ans;
}

//count all occurences of an anagram in a string
function countAnagrams(arr, pattern) {
  var map = {};
  for (let s of pattern) {
    if (map[s]) {
      map[s] = map[s] + 1;
    } else {
      map[s] = 1;
    }
  }

  let i = 0,
    j = 0;
  let count = Object.keys(map).length;
  let ans = 0;
  while (j < arr.length) {
    //check if the char is present in map or not
    if (map[arr[j]] != undefined) {
      map[arr[j]] = map[arr[j]] - 1; //if yes, decrement its count
      if (map[arr[j]] == 0) count--;
    }

    if (j - i + 1 == pattern.length) {
      if (count == 0) ans++;
      if (map[arr[i]] != undefined) {
        map[arr[i]] = map[arr[i]] + 1;
        if (map[arr[i]] == 1) count++;
      }
      i++;
    }
    j++;
  }
  return ans;
}

// find the maximum of all subarray of size n and return those values
//example: [2,6,3,7,1,9,10], size 3 => [6,7,7,9,10]
function maxSubArrayEl(arr, n) {
  let i = 0,
    j = 0;
  var grArr = []; //we will store the required greater elements in this array. Always the largest element will be at the top
  var ans = [];
  while (j < arr.length) {
    if (!grArr.length) grArr.push(arr[j]);
    //if the cur element is greater than the first(largest element), remove all the previous elements and store the cur element in the array
    else if (arr[j] > grArr[0]) grArr[0] = arr[j];
    //otherwise, we are getting elements in descending order only. Keep storing them for future reference
    else grArr.push(arr[j]);

    if (j - i + 1 == n) {
      ans.push(grArr[0]);

      if (grArr[0] == arr[i]) grArr.shift();
      i++;
    }
    j++;
  }
  return ans;
}

module.exports = {
  maxSumSubArray,
  firstNegativeInteger,
  countAnagrams,
  maxSubArrayEl,
};
