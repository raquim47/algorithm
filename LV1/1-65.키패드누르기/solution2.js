// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
function findDistance(target, current) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1], // L: 8, R: 9
  ];
  let targetLocation = [];
  let currentLocation = [];

  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[i].length; j++) {
      if (keypad[i][j] === target) {
        targetLocation = [i, j];
      }
      if (keypad[i][j] === current) {
        currentLocation = [i, j];
      }
    }
  }
  const X = Math.abs(targetLocation[0] - currentLocation[0]);
  const Y = Math.abs(targetLocation[1] - currentLocation[1]);
  return X + Y;
}

// console.log("distance", findDistance(1, 1));
function solution(numbers, hand) {
  let answer = "";

  let currentL = -1;
  let currentR = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 1) {
      currentL = numbers[i];
      answer += "L";
    } else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
      currentR = numbers[i];
      answer += "R";
    } else {
      if (
        findDistance(numbers[i], currentL) > findDistance(numbers[i], currentR)
      ) {
        currentR = numbers[i];
        answer += "R";
      } else if (
        findDistance(numbers[i], currentL) < findDistance(numbers[i], currentR)
      ) {
        currentL = numbers[i];
        answer += "L";
      } else {
        if (hand === "right") {
          currentR = numbers[i];
          answer += "R";
        } else {
          currentL = numbers[i];
          answer += "L";
        }
      }
    }
  }

  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //	"LRLLRRLLLRR"
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //	"LLRLLRLLRL"
