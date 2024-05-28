// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(land) {
  let max = 0;

  function recursive(arr, sum, rowIndex) {
    if (!arr.length) {
      if (sum > max) max = sum;
      return;
    }

    for (let i = 0; i < arr[0].length; i++) {
      if (rowIndex === i) continue;

      sum += arr[0][i];
      recursive(arr.slice(1), sum, i);
    }
  }

  recursive(land, 0);
  return max;
}

console.log(
  solution([
    [6, 7, 1, 2], // 7
    [2, 3, 10, 8], // 8
    [1, 3, 9, 4], // 9
    [7, 11, 4, 9], // 11
  ])
); // 35
