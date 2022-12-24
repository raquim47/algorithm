// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

function solution(k, m, score) {
  score = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = m - 1; i < score.length; i += m) {
    result += m * score[i];
  }

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 	8
// console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
