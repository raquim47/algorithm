// https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript

function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      x--;
      if (Math.abs(x) > (board[0] - 1) / 2) {
        if (x < 0) {
          x = (board[0] - 1) / 2 * -1;
        } else if (x > 0) {
          x = (board[0] - 1) / 2;
        }
      }
    } else if (keyinput[i] === "right") {
      x++;
      if (Math.abs(x) > (board[0] - 1) / 2) {
        if (x < 0) {
          x = (board[0] - 1) / 2 * -1;
        } else if (x > 0) {
          x = (board[0] - 1) / 2;
        }
      }
    } else if (keyinput[i] === "down") {
      y--;
      if (Math.abs(y) > (board[0] - 1) / 2) {
        if (y < 0) {
          y = (board[1] - 1) / 2 * -1;
        } else if (y > 0) {
          y = (board[1] - 1) / 2;
        }
      }
    } else if (keyinput[i] === "up") {
      y++;
      if (Math.abs(y) > (board[0] - 1) / 2) {
        if (y < 0) {
          y = (board[1] - 1) / 2 * -1;
        } else if (y > 0) {
          y = (board[1] - 1) / 2;
        }
      }
    }
  }
  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //	[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
