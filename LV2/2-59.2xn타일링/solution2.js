// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// 재귀 사용시 맥시멈 호출 스택 에러
// const dp = [null, 1, 2];

// function solution(n) {
//   if (dp[n]) return dp[n];
//   dp[n] = (solution(n - 1) + solution(n - 2)) % 1000000007;
//   return dp[n];
// }

function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n];
}

console.log(solution(4)); // 	5
