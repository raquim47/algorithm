// https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript

function solution(i, j, k) {
  let answer = 0;
  for (let idx = i; idx <= j; idx++) {
    for (let idxI = 0; idxI < (idx + "").length; idxI++) {
      if ((idx + "")[idxI] == k) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
