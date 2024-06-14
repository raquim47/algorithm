// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(board) {
  let prevRow = board[0];
  for (let row = 1; row < board.length; row++) {
    let max1 = -1;
    let max2 = -1;
    let idx = -1;

    for (let col = 0; col < board[0].length; col++) {
      const prevValue = prevRow[col];
      if (prevValue > max1) {
        max2 = max1;
        max1 = prevValue;
        idx = col;
      } else if (prevValue > max2) {
        max2 = prevValue;
      }
    }

    for (let col = 0; col < board[0].length; col++) {
      board[row][col] += col === idx ? max2 : max1;
    }

    prevRow = board[row];
  }
  return Math.max(...prevRow);
}

console.log(
  solution([
    [6, 7, 1, 2], // 7
    [2, 3, 10, 8], // 8
    [1, 3, 9, 4], // 9
    [7, 11, 4, 9], // 11
  ])
); // 35
