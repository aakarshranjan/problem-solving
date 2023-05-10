//find the length of largest subarray with a given sum in an array
function largestSubarraySum(arr, val) {
  let i = 0,
    j = 0;
  let sum = 0;
  let ans = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (sum == val) {
      ans = Math.max(ans, j - i + 1);
    }
    if (sum > val) {
      while (sum > val) {
        sum -= arr[i];
        i++;
      }
      if (sum == val) {
        ans = Math.max(ans, j - i + 1);
      }
    }
    j++;
  }
  return ans;
}

//find the longest substring with n unique characters
function longestSubstrSomeUniqueChar(str, n) {
  let i = 0,
    j = 0;
  let map = new Map();
  let ans = 0;
  while (j < str.length) {
    if (map.has(str[j])) map.set(str[j], map.get(str[j]) + 1);
    else map.set(str[j], 1);

    if (map.size == n) {
      ans = Math.max(ans, j - i + 1);
    } else if (map.size > n) {
      //   while (map.size > n) {
      map.set(str[i], map.get(str[i]) - 1);
      if (map.get(str[i]) == 0) map.delete(str[i]);
      i++;
      //   }
      if (map.size == n) ans = Math.max(ans, j - i + 1);
    }
    j++;
  }
  return ans;
}

//longest substring with no repeating characters
function longestSubStrAllUniqueChar(str) {
  let j = 0;
  let ans = 0;
  let set = new Set(); //set always has unique

  while (j < str.length) {
    //if element not present in set, meaning unique
    if (!set.has(str[j])) set.add(str[j]);
    else {
      ans = Math.max(ans, set.size);
      /*
        Delete all the elements in the set till the index of the current element of which we got
        another occurence. Example: set has [2,1,4,5,3]. After 3 we again 4, then delete everything
        from starting(2 in this case), till the index of cur element in the set(4 in this case).
        By doing this, we will have 5,3,4(latest addition) in the set as unique with most count.
      */
      for (const k of set) {
        if (k == str[j]) {
          set.delete(k);
          break;
        }
        set.delete(k);
      }
      set.add(str[j]);
      ans = Math.max(ans, set.size);
    }
    j++;
    if (j == str.length) ans = Math.max(ans, set.size);
  }
  return ans;
}

/*
    Minimum window Substring.
    In this, we are given a string and a pattern. That pattern must be present in the given string
    with minimum elements in any sequence. Also there can be elements in between the pattern characters
    in the string.
    Example:
    string - 'ADKTAPCTKPD', pattern - 'ADP' -> 5 (index 1 till 5)
*/
function minimumWindowSubstr(str, pattern) {
  //create a map of the character pattern with frequency
  var map = new Map();
  for (let ch of pattern) {
    if (map.has(ch)) map.set(ch, map.get(ch) + 1);
    else map.set(ch, 1);
  }

  let i = 0,
    j = 0;
  let count = map.size;
  let ans = Number.MAX_VALUE;
  while (j < str.length) {
    if (map.has(str[j])) {
      map.set(str[j], map.get(str[j]) - 1);
      if (map.get(str[j]) == 0) count--;
    }
    if (count == 0) {
      ans = Math.min(ans, j - i + 1);
      while (i < j) {
        if (map.has(str[i])) {
          map.set(str[i], map.get(str[i]) + 1);
          if (map.get(str[i]) == 1) {
            count++;
            i++;
            break;
          }
          i++;
        } else {
          i++;
        }
        ans = Math.min(ans, j - i + 1);
      }
    }
    j++;
  }
  return ans;
}

module.exports = {
  largestSubarraySum,
  longestSubstrSomeUniqueChar,
  longestSubStrAllUniqueChar,
  minimumWindowSubstr,
};
