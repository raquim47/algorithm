// 연습문제5
// 정수 배열과 숫자가 주어진 경우, 함수인 maxSubarraySum을 작성하세요. 이 함수는 함수에 전달된 숫자 길이의 부분 배열의 최대 합을 찾습니다. 부분 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 아래의 첫 번째 예에서 [100, 200, 300]은 원래 배열의 부분 배열이지만, [100, 300]은 그렇지 않습니다.

// Restrictions: Time - O(N), Space - O(1)

// My Code
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = maxSum >= tempSum ? maxSum : tempSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
