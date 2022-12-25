// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
function findLocation(number){
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1],
  ];
  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[i].length; j++) {
      if(keypad[i][j] === number){
        return i;
      }
    }
  }
}
// console.log("location", findLocation(-1));
function solution(numbers, hand) {
  
  let answer = "";

  let currentL = -1;
  let currentR = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      currentL = numbers[i];
      answer += "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
      currentR = numbers[i];
      answer += "R";
    } else {
    }

      console.log(numbers[i]);
  }
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //	"LRLLRRLLLRR"
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //	"LLRLLRLLRL"
