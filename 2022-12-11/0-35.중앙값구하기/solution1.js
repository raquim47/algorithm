// https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript

function solution(array) {
  let arr = [];
  let maxNum = -1000;
  for (let j = 0; j < array.length; j++) {
    // 최대값 찾기
    for (let i = 0; i < array.length; i++) {
      if (maxNum < array[i]) {
        maxNum = array[i];
      }
    }
    // 새 배열에 넣기
    arr[j] = maxNum;
    // 배열에서 최대값 지우기
    for (let i = 0; i < array.length; i++) {
      if (maxNum === array[i]) {
        array[i] = -1001;
        break;
      }
    }
    // 최대값 초기화
    maxNum = -1000;
  }
  return arr[(arr.length - 1) / 2];
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
