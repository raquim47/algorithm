// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let count = 1;
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    if (i === n) return count;
    let sum = i;
    for (let j = i + 1; j <= Math.ceil(n / 2); j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return count;
}
console.log(solution(9)); // 4

