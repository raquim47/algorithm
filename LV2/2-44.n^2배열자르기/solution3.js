// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n); // 행 인덱스
    let col = i % n; // 열 인덱스
    answer.push(max(row, col) + 1);
  }
  return answer;
}
[
  [1, 2, 3],
  [2, 2, 3],
  [3, 3, 3],
];
// 1 ,1 : 1
// 1, 2 : 3
// 1, 3 : 3

// 2, 1 : 2
// 5 : 2
// 6 : 3

// 7 : 3
// 8 : 3
// 9 : 3

console.log(solution(3, 2, 5)); // [3,2,2,3]
