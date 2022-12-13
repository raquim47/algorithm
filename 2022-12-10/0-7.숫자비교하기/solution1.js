// https://school.programmers.co.kr/learn/courses/30/lessons/120802?language=javascript
function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}
console.log(solution(2, 3)); // -1
console.log(solution(11, 11)); // 1
console.log(solution(7, 99)); // -1
