//knapsack problems: 0-1

/* Question: 
    We are given a knapsack(bag), with a max capacity of 10 kg and some items with
    their weights and values in an array. Find out the maximum profit that can be achieved.

    W=10kg
    wt[] = [4,6,1,3,8,5,2]
    val[] = [3,6,7,5,2,4,1]
*/

/*
    Here, the base condition is capacity and no of elements of the array should not be 0
    We start with the last element for its weight and value
    The below function recursively calls iteself with total 3 possibilities:
    1) Its weight is greater than capacity, so we skip it and consider next element
    2) Its weight is less or equal to the capacity and we take its value
    3) Its weight is less or equal to the capacity and we ignore its value

    We recursively call the method for points 2 and 3, and consider that part of program exec which
    returns us max result
    For each recursion, we reduce the capacity(for point 2) and reduce n(no of array elements) for
    all points as the array size will decrease for each recursion
 */
function knapsack01Recursive(weightArr, valArr, W, n) {
  if (W == 0 || n == 0) return 0;

  if (weightArr[n - 1] > W)
    return knapsack01Recursive(weightArr, valArr, W, n - 1);

  return Math.max(
    valArr[n - 1] +
      knapsack01Recursive(weightArr, valArr, W - weightArr[n - 1], n - 1),
    knapsack01Recursive(weightArr, valArr, W, n - 1)
  );
}

/*
    In the given scenario, only capacity and length of the array are changing, rest parameters remain
    same, so we can use memoize approach as well.
    Incase of memoize, we create a 2D array with the size greater than that of capacity and 
    length of given array, and we initialize it with some default value like -1 and going forward,
    for each recursive call we first check if the data is present in the matrix for that combination
    of W and n. If yes, we directly return that value, otherwise compute that value, store it in the
    matrix and then return it
*/
function knapsack01Memoize(weightArr, valArr, W, n) {
  let matrix = new Array(W + 1).fill([]).map(() => new Array(n + 1).fill(-1));

  function knapsack01Recursive(weightArr, valArr, W, n) {
    if (W == 0 || n == 0) return 0;

    if (matrix[W][n] != -1) return matrix[W][n];

    if (weightArr[n - 1] > W)
      return (matrix[W][n] = knapsack01Recursive(weightArr, valArr, W, n - 1));

    return (matrix[W][n] = Math.max(
      valArr[n - 1] +
        knapsack01Recursive(weightArr, valArr, W - weightArr[n - 1], n - 1),
      knapsack01Recursive(weightArr, valArr, W, n - 1)
    ));
  }
  return knapsack01Recursive(weightArr, valArr, W, n);
}

/*
    In Top-Down approach, we create a table considering W and n(as only these 2 are changing 
    every time).
    Note that the dimensions are n+1 and W+1 as we do initialization in the first row and first col.
    In initialization, we give the value which is returned in the base condition of a recursive
    method. Example, in the above question, upon hitting the base condition, it returns us 0, so we
    will initialize it with that value.
    Now the maximum profit to be returned can be found in the last cell of the table,which is mat[n][W].
    Example, W=4, n=5, table will be of 5*6(5 rows, 6 cols), index of last cell will be [4][5], which
    is [n][W].
    Here instead of recursively calling the method, we iteratively check the table for values and 
    insert values after computing if not present.
*/
function knapsackTopDown(weightArr, valArr, W, n) {
  let matrix = new Array(n + 1).fill(null).map(() => new Array(W + 1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i == 0 || j == 0) matrix[i][j] = 0; //base condition
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < W + 1; j++) {
      if (weightArr[i - 1] <= j) {
        matrix[i][j] = Math.max(
          valArr[i - 1] + matrix[i - 1][j - weightArr[i - 1]],
          matrix[i - 1][j]
        );
      } else {
        matrix[i][j] = matrix[i - 1][j];
      }
    }
  }
  return matrix[n][W];
}

module.exports = {
  knapsack01Recursive,
  knapsack01Memoize,
  knapsackTopDown,
};
