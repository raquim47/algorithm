// 예제 1
// 정수 배열과 n이라는 숫자를 받는 maxSubarraySum이라는 함수를 작성하세요. 이 함수는 배열에서 연속된 n개의 요소의 최대 합계를 계산해야 합니다.

// Naive Solution
// O(n^2)
function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
// Refactor
// O(n)
function maxSubarraySum2(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // [1,2,3,4,5,6], 3 일 때
    // 합계 - arr[0] + arr[3] : 6 - 1 + 4
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 1
console.log(maxSubarraySum2([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([], 4)); // null
