// https://school.programmers.co.kr/learn/courses/30/lessons/12945

// function fib(n) {
//   if (n <= 2) return n;

//   return (fib(n - 1) + fib(n - 2)) % 1234567;
// }

const dp = [0, 1, 1];

function solution(n) {
  if (dp[n]) return dp[n];
  dp[n] = (solution(n - 1) + solution(n - 2)) % 1234567;
  return dp[n];
}

// console.log(solution(3)); // 2
console.log(fib(9)); // 34
