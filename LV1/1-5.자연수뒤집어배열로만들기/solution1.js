// https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
  const str = n + "";
  let reverseStr = [];
  let reverseStrI = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr[reverseStrI] = Number(str[i]);
    reverseStrI++;
  }
  return reverseStr;
}

console.log(solution(12345)); // [5,4,3,2,1]
