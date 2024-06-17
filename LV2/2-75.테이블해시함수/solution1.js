// https://school.programmers.co.kr/learn/courses/30/lessons/147354

function solution(data, col, row_begin, row_end) {
  let result = 0;

  const sortedArr = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin - 1; i < row_end; i++) {
    let remainSum = 0;
    for (let j = 0; j < sortedArr[i].length; j++) {
      remainSum += sortedArr[i][j] % (i + 1);
    }
    result ^= remainSum;
  }
  
  return result;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
); // 4
