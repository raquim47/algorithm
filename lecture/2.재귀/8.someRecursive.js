// 이 함수는 배열과 콜백 함수를 매개변수로 받습니다. 배열의 요소 중 하나라도 콜백 함수에 전달했을 때 true를 반환한다면, 함수는 true를 반환해야 합니다. 만약 콜백 함수가 모든 요소에 대해 false를 반환한다면, 함수는 false를 반환해야 합니다.

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;

  if (callback(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), callback);
  }
}
// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
