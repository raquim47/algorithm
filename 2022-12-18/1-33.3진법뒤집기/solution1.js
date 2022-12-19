// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
// 125
// 41 2
// 13 2
// 4  1
// 1  1

function solution(n) {
  let reversRadix3 = "";

  while (true) {
    if (n >= 3) {
      reversRadix3 += n % 3;
      n = Math.floor(n / 3);
    } else {
      reversRadix3 += n;
      break;
    }
  }
  let answer = 0;
  for (let i = reversRadix3.length - 1; i >= 0; i--) {
    answer += reversRadix3[i] * 3 ** (reversRadix3.length - i - 1);
  }
  return answer;
}
console.log(solution(2)); // 1
console.log(solution(45)); // 7
// console.log(solution(125)); // 229
