// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(board) {
  let result = 0;
  let temp;
  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      temp = board[i - 1].slice();
      temp[j] = 0;
      board[i][j] += Math.max(...temp);
    }
  }
  result = Math.max(...board[board.length - 1]);

  return result;
}

console.log(
  solution([
    [6, 7, 1, 2], // 7
    [2, 3, 10, 8], // 8
    [1, 3, 9, 4], // 9
    [7, 11, 4, 9], // 11
  ])
); // 35
