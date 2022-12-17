// https://school.programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
  let calc = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      calc += absolutes[i];
    } else {
      calc += absolutes[i] * -1;
    }
  }

  return calc;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
