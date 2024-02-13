// https://school.programmers.co.kr/learn/courses/30/lessons/181876

function solution(my_string, n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += my_string[i]
  }
  return answer;
}

console.log(solution('ProgrammerS123', 11)); // "ProgrammerS"
// console.log(solution('He110W0r1d', 5)); // "He110"
