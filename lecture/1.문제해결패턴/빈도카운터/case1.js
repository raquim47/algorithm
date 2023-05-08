// 예제 1
// 두 개의 배열을 받는 same이라는 함수를 작성하세요. 첫번재 배열의 모든 값이 두 번째 배열에서 해당 값의 제곱 값과 일치하는 경우 true를 반환해야 합니다. 두 배열에서 값의 빈도는 동일해야 합니다. (순서 X)

// Naive Solution
// O(n^2), 제곱 시간 소요(for x indexOf)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored
// O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2)
  for (const key in frequencyCounter1) {
    // in 연산자 : 객체에서 key의 존재 여부를 확인하는 연산자, 이때 key는 문자열이어야 한다.
    // if(!(frequencyCounter2[key]))
    // 키를 찾는 작업은 O(1)
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
