// 예제 1
// 정렬된 정수 배열을 입력으로 받는 sumZero라는 함수를 작성하세요. 이 함수는 합이 0이 되는 첫 번째 쌍을 찾아야 합니다. 합이 0이 되는 두 값을 포함하는 배열을 반환하거나, 쌍이 존재하지 않는 경우 undefined를 반환하세요.

// Naive Solution
// O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// Refactored
// T: O(n) / S: O(1)
function sumZero2(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left] , arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}


// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 5, 6, 7, 11])); // [-1, 1]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
