// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n); // 행 인덱스
    let col = i % n; // 열 인덱스
    answer.push(row > col ? row + 1 : col + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
