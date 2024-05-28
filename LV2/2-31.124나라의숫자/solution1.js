// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  const nums = [4, 1, 2];
  let answer = '';

  while (n > 0) {
    answer = nums[n % 3] + answer;
    n = Math.ceil(n / 3 - 1);
  }

  return answer;
}

console.log(solution(9)); // 24
