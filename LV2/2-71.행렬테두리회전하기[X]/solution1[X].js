// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const board = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );
  for (let i = 0; i < 1; i++) {
    let [ar, ac, br, bc] = queries[i];
    let before = board[ar - 1][ac - 1];
    
    if (ac < bc - 1) {
      console.log(ar, ac);
      ac++;
    }
    if (ac < bc) {
      console.log(ar, ac);
      ac++;
    }
    // 2 2 5 4
    // console.log(ar, ac, br, bc);
    // console.log(board)
    console.log(board[ar - 1][ac - 1 + 1]);
  }
}
[
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];
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
