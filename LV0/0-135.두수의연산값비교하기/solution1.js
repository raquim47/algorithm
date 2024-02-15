// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  return Math.max(Number('' + a + b), 2 * a * b);
}

console.log(solution(91, 2)); // 912
