// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const board = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + c + 1)
  );
  const mins = [];

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((v) => v - 1);
    let min = board[x1][y1],
      tmp = board[x1][y1];

    for (let i = x1; i < x2; i++) {
      board[i][y1] = board[i + 1][y1];
      console.log(board);
      min = Math.min(min, board[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      board[x2][i] = board[x2][i + 1];
      console.log(board);
      min = Math.min(min, board[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      board[i][y2] = board[i - 1][y2];
      console.log(board);
      min = Math.min(min, board[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      board[x1][i] = board[x1][i - 1];
      console.log(board);
      min = Math.min(min, board[x1][i]);
    }
    board[x1][y1 + 1] = tmp;

    mins.push(min);
  });

  return mins;
}
console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
); // [8, 10, 25]

// console.log(
//   solution(3, 3, [
//     [1, 1, 2, 2],
//     [1, 2, 2, 3],
//     [2, 1, 3, 2],
//     [2, 2, 3, 3],
//   ])
// ); // [1, 1, 5, 3]
