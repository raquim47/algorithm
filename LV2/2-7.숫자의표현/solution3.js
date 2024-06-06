// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  if (n === 1) return n;

  let start = 1;
  let end = 2;
  let count = 0;
  let sum = start + end;
  const limit = Math.floor((n + 1) / 2);
  
  while (end <= limit) {
    if (sum < n) {
      end++;
      sum += end;
    } else if (sum > n) {
      sum -= start;
      start++;
    } else {
      count++;
      end++;
      sum += end;
    }
  }
  return count + 1;
}

console.log(solution(15)); // 2
