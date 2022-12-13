// https://school.programmers.co.kr/learn/courses/30/lessons/120831?language=javascript
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
