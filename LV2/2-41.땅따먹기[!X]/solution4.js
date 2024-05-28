// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(land) {
  const rowLength = land.length;
  const colLength = land[0].length;

  // 이전 행의 최대 점수를 저장할 배열
  let prevRow = land[0];

  // 두 번째 행부터 시작
  for (let row = 1; row < rowLength; row++) {
    let prevMax = -1,
      prevMax2 = -1,
      prevMaxIdx = -1;

    for (let col = 0; col < colLength; col++) {
      const prevValue = prevRow[col];
      if (prevValue > prevMax) {
        prevMax2 = prevMax;
        prevMax = prevValue;
        prevMaxIdx = col;
      } else if (prevValue > prevMax2) {
        prevMax2 = prevValue;
      }
    }
    const currRow = [];
    for (let col = 0; col < colLength; col++) {
      currRow[col] = land[row][col] + (col === prevMaxIdx ? prevMax2 : prevMax);
    }
    prevRow = currRow;
  }
  
  return Math.max(...prevRow);
}

console.log(
  solution([
    [6, 7, 1, 2], // 7
    [2, 3, 10, 8], // 8
    [1, 3, 9, 4], // 9
    [7, 11, 4, 9], // 11
  ])
); // 35
