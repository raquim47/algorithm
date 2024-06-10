// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let count = Math.log(n) / Math.log(2);
  let min = 1;
  let max = n;
  while (count) {
    if (min <= a && a <= max / 2 && min <= b && b <= max / 2) {
      max = max / 2;
      count--;
    } else if (max / 2 < a && a <= max && max / 2 < b && b <= max) {
      min = max / 2;
      count--;
      console.log(min, max)
    } else {
      console.log('hi');
      return count;
    }
  }
}
console.log(solution(16, 14, 13)); // 		1
