// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(land) {
  let rowIndex = -1;
  let sum = 0;

  for (let i = 0; i < land.length; i++) {
    let max = -Infinity;
    let maxIndex = -1;

    for (let j = 0; j < land[i].length; j++) {
      if (rowIndex === j) continue;

      if (max < land[i][j]) {
        max = land[i][j];
        maxIndex = j;
      }
    }
    rowIndex = maxIndex;
    sum += max;
  }

  return sum;
}

// console.log(
//   solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
//   ])
// ); // 16
console.log(
  solution([
    [6, 7, 1, 2], 7
    [2, 3, 10, 8], 10
    [1, 3, 9, 4], 4
    [7, 11, 4, 9], 11
  ])
); // 35
