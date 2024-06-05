// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  let minCount = 0;

  if ((y - x) % n === 0) {
    minCount = (y - x) / n;
  }

  let multiCount = 0;
  while (true) {
    if (y % 3 === 0) {
      y = y / 3;
      multiCount++;
    } else if (y % 2 === 0) {
      y = y / 2;
      multiCount++;
    }

    if(y === x){
      
    }
  }
}

// console.log(solution(10, 40, 5)); // 2
console.log(solution(20, 34, 7)); // 2

// function solution(x, y, n) {
//   x : 10, y:  180, n : 7
//   + n // 17
//   x 3 // 51
//   x 2 // 102
//   x 3 // 306
// }
// 306 = 3 x 3 x 2 x 17
