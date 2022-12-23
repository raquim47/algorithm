// https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript

function solution(n, k) {
  if (n >= 10) {
    return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
  } else {
    return n * 12000 + k * 2000;
  }
}

console.log(solution(10, 3)); // 124,000
console.log(solution(64, 6)); // 768,000
