// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

function solution(n) {
  let radix3 = "";

  while (n > 0) {
    // radix3 = radix3 + n % 3;
    radix3 = n % 3 + radix3;
    n = Math.floor(n / 3);
  }

  let answer = 0;
  for (let i = 0; i < radix3.length; i++) {
    answer += radix3[i] * (3 ** i);
  }

  return answer;
}
console.log(solution(2)); // 1
console.log(solution(45)); // 7
console.log(solution(125)); // 229
