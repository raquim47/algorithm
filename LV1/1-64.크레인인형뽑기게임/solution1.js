// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  let arr = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // console.log(board[j][moves[i] - 1]);
        
      if (board[j][moves[i] - 1] > 0) {
        if (arr[arr.length - 1] === board[j][moves[i] - 1]) {
          arr.splice(-1);
          count += 2;
        } else {
          arr.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4