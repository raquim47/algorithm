// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// n = 13
let start = 1;
let end = 1;
let count = 0;
let sum = 0;
// (0 < n), sum += end(1); end++;
// (1 < n), sum += end(2); end++;
// (1+2 < n), sum += end(3); end++;
// (1+2+3 < n), sum += end(4); end++;
// (1+2+3+4(10) < n), sum += end(5); end++;
// (1+2+3+4+5(15) > n), sum-start(1); start++;
// (2+3+4+5(14) > n), sum-start(2); start++;
// (3+4+5(12) < n), sum += end(6); end++;
// (3+4+5+6(18) > n), sum-start(3); start++;
// (4+5+6(15) > n), sum-start(4); start++;
// (5+6(11) < n), sum += end(7); end++;
// (5+6+7(18) > n), sum-start(5); start++;
// (6+7(13) === n),

function solution(n) {
  let start = 1;
  let end = 1;
  let count = 0;
  let sum = 0;

  while (end -1 <= n) {
    if (sum < n) {
      sum += end;
      end++;
    } else if (sum > n) {
      sum -= start;
      start++;
    } else {
      count++;
      if (end - start === 2) {
        return count + 1;
      }
      sum += end;
      sum -= start;
      start++;
      end++;
    }
  }

  return count;
}

console.log(solution(13)); // 2