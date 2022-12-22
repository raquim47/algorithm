// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

// function solution(k, m, score) {
//   score = score.sort((a, b) => b - a);
//   let result = 0;

//   for (let i = m - 1; i < score.length; i += m) {
//     result += m * score[i];
//   }

//   return result;
// }

function solution(k, m, score) {
  const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
  const filteredScore = sortedScore.filter((e,i) => i % m === 0);

  let result = 0;

  for (let i = 0; i < filteredScore.length; i++) {
    result += m * filteredScore[i];
  }

  return result;
}

// function solution(k, m, score) {
//   let answer = 0;
//   const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
//   return sortedScore;
//   [1, 1, 1, 2, 2, 3, 3];
//   [ 2, 2, 3, 3 ]
//   for (let i = 0; i < sortedScore.length; i += m) {
//     answer += sortedScore[i] * m;
//   }
//   return answer;
// }
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 	8
// console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
