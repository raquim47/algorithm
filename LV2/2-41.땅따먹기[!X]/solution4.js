// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  const rowLength = land.length;
  const colLength = land[0].length;

  // 이전 행의 최대 점수를 저장할 배열
  let prevRow = land[0];

  // 두 번째 행부터 시작
  for (let row = 1; row < rowLength; row++) {
      // 이전 행에서 가장 큰 값과 두 번째로 큰 값을 찾습니다.
      let max1 = -1, max2 = -1, idx1 = -1;
      
      for (let col = 0; col < colLength; col++) {
          const value = prevRow[col];
          if (value > max1) {
              max2 = max1;
              max1 = value;
              idx1 = col;
          } else if (value > max2) {
              max2 = value;
          }
      }
      
      // 현재 행의 각 칸에 이전 행의 최대 점수를 더하면서, 같은 열을 제외한 최대값을 사용합니다.
      for (let col = 0; col < colLength; col++) {
          land[row][col] += (col === idx1 ? max2 : max1);
      }
      
      // 이전 행을 현재 행으로 업데이트합니다.
      prevRow = land[row];
  }
  
  // 마지막 행에서 가장 큰 값이 최대 점수입니다.
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
