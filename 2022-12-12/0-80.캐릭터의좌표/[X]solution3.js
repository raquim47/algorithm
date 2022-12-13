// https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript

function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left" && (Math.abs(x) < (board[0] - 1) / 2)) {
      x--;
    } else if (keyinput[i] === "right" && (Math.abs(x) < (board[0] - 1) / 2)) {
      x++;
    } else if (keyinput[i] === "down" && (Math.abs(y) < (board[1] - 1) / 2)) {
      y--;
    } else if (keyinput[i] === "up" && (Math.abs(y) < (board[1] - 1) / 2)) {
      y++;
    }
  }
  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //	[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
