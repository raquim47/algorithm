// https://school.programmers.co.kr/learn/courses/30/lessons/120860?language=javascript

// 1. [x, y]를 곱했을 때 절대값이 가장 큰 배열과 가장 작은 배열을 찾는다.
// 2. 큰 배열의 x, y와 작은 배열의 x, y를 각각 뺀다
// 3. 뺀 x와 y를 곱한다
function solution(dots) {
  let arr = []
  let max = -1;
  let maxArr;
  for (let i = 0; i < dots.length; i++) {
    // 최대 곱했을 떄 큰 배열 찾기
    for (let j = 0; j < dots.length; j++) {
      if (dots[j] && max <= Math.abs(dots[j][0] * dots[j][1])) {
        max = Math.abs(dots[j][0] * dots[j][1]);
        maxArr = dots[j];
      }
    }
      arr[i] = maxArr;
    // 찾은 거 지우기
    for (let j = 0; j < dots.length; j++) {
      if (dots[j] && max === Math.abs(dots[j][0] * dots[j][1])) {
        dots[j] = null;
        break;
      }
    }
    max = -1;
  }
  const calcX = arr[0][0] - arr[3][0];
  const calcY = arr[0][1] - arr[3][1];
  return arr;
}

console.log(solution([[0, 0], [0, 1], [1, 0], [1, 1]]	))// 
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]	))// 1
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]))// 4