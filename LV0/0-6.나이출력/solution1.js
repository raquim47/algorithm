// https://school.programmers.co.kr/learn/courses/30/lessons/120820?language=javascript
function solution(age) {
  // 1살 -> 2022년 출생
  var answer = 2022 - (age - 1);
  return answer;
}

console.log(solution(40)) //, 1983
console.log(solution(23)) //, 2000