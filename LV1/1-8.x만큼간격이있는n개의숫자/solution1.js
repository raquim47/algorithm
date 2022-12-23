// https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  let answer = [];
  let answerI = 0;
  let start = x;
  for (let i = 0; i < n; i++) {
    answer[answerI] = start;
    answerI++;
    start += x;
  }
  return answer;
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4, -8]
