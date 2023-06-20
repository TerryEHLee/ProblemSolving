function solution(n) {
  const result = [];

  // Create an empty n x n array filled with 0s
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  let num = 1; // Starting number
  let top = 0; // Top row index
  let bottom = n - 1; // Bottom row index
  let left = 0; // Left column index
  let right = n - 1; // Right column index

  while (num <= n * n) {
    // Fill top row from left to right
    for (let i = left; i <= right; i++) {
      result[top][i] = num;
      num++;
    }
    top++;

    // Fill right column from top to bottom
    for (let i = top; i <= bottom; i++) {
      result[i][right] = num;
      num++;
    }
    right--;

    // Fill bottom row from right to left
    for (let i = right; i >= left; i--) {
      result[bottom][i] = num;
      num++;
    }
    bottom--;

    // Fill left column from bottom to top
    for (let i = bottom; i >= top; i--) {
      result[i][left] = num;
      num++;
    }
    left++;
  }

  return result;
}