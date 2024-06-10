// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  if (n === 1) return n;

  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const sum = (a + b) % 1234567;
    a = b;
    b = sum;
  }

  return b;
}

console.log(solution(2)); // 5
