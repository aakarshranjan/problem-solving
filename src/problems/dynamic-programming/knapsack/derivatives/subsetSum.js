//Derivative of knapsack

/*
    This is the Subset Sum problem, derivate of knapsack. In this, we are given an array and a sum.
    We are to tell if there exists any combination of elements whose sum gives us the given sum.
    We have to return true/false.
    Example: arr=[1,4,5,8,10], sum = 12, here , the subset 4,8 gives us the given sum 12, so we
    return true.
*/

function subsetSum(arr, sum, n) {
  let matrix = new Array(n + 1).fill(null).map(() => new Array(sum + 1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (i == 0) matrix[i][j] = false;
      if (j == 0) matrix[i][j] = true;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      if (arr[i] > sum) matrix[i][j] = matrix[i - 1][j];
      else matrix[i][j] = matrix[i - 1][j - arr[i - 1]] || matrix[i - 1][j];
    }
  }
  return matrix[n][sum];
}

module.exports = subsetSum;
