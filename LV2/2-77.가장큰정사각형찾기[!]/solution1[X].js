// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  const rows = board.length;
  const cols = board[0].length;

  let maxSize = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const element = board[i][j];
      if (element) {
        let y = i;
        let x = j;
        while (x < cols && y < rows) {
          if (board[y][j] && board[i][x]) {
            let flag = true;
            for (let z = i; z < y; z++) {
              if (!board[y][j + z] || !board[i + z][x]) {
                flag = false;
                break;
              }
            }
            if (flag) {
              maxSize = Math.max((y + 1 - i) ** 2, maxSize);
            } else {
              break;
            }
            x++;
            y++;
          } else {
            break;
          }
        }
      }
    }
  }
  return maxSize;
}

console.log(
  solution([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
); // 9
