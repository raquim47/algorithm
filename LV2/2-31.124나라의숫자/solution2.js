// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = '';
  const nums = [4, 1, 2];
  while (1 <= n) {
    answer = nums[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}

console.log(solution(9)); // 24
