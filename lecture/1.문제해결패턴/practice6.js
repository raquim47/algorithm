// 연습문제6
// minSubArrayLen이라는 함수를 작성하세요. 이 함수는 두 개의 매개변수를 받아들입니다 - 양의 정수들로 이루어진 배열과 양의 정수 하나. 이 함수는 합계가 전달된 정수 이상인 연속된 부분 배열의 최소 길이를 반환해야 합니다. 만약 그런 부분 배열이 없다면, 대신 0을 반환하세요.

// Restrictions: Time - O(N), Space - O(1)

// My Code X
function minSubArrayLen(arr, n) {
  // 두개의 포인터, 합계 변수 초기화
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  //[2, 3, 1, 2, 4, 3]
  while (i < arr.length) {
    console.log('hi');
    // i가 arr.length 보다 작을 때 까지 반복, i가 6보다 작을 때 까지
    if (sum < n) {
      // 합계가 n보다 작은 경우 j의 현재 요소를 더하고 j++
      sum += arr[j];
      j++;
    } else {
      // 합계가 n보다 크거나 같은 경우
      // (min보다 배열의 길이가 작은 경우)배열의 길이를 저장
      if (min > j - i) {
        min = j - i;
      }
      // sum을 초기화하고 i를 오른쪽으로 한칸 이동
      sum = 0;
      i++;
      j = i;
    }
  }
  return min;
}

// GPT Code
function minSubArrayLen2(arr, n) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (j < arr.length) {
    if (sum >= n) {
      min = Math.min(min, j - i);
      sum -= arr[i];
      i++;
    } else {
      sum += arr[j];
      j++;
    }
  }
  // j가 배열의 길이를 벗어났을 때도, 합계가 n보다 크거나 같은 경우를 확인합니다.
  while (sum >= n) {
    min = Math.min(min, j - i);
    sum -= arr[i];
    i++;
  }
  // min이 초기값인 Infinity인 경우 부분 배열이 없다는 것이므로 0을 반환합니다.
  return min === Infinity ? 0 : min;
}

// Lecture Code
function minSubArrayLen3(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen2([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
