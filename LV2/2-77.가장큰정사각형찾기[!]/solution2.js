// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  const rows = board.length;
  const cols = board[0].length;

  // 행이나 열의 길이가 0인 경우, 정사각형은 존재할 수 없으므로 0을 반환
  if (rows === 0 || cols === 0) return 0;

  let maxSize = 0;
  
  // DP 배열을 사용하지 않고, 원본 배열에 직접 계산을 적용
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // 첫 행이나 첫 열에 있는 경우, 정사각형의 최대 크기는 그 자리의 값과 같다
          if (i === 0 || j === 0) {
              maxSize = Math.max(maxSize, board[i][j]);
          } else if (board[i][j] > 0) {
              // 현재 위치에서 만들 수 있는 최대 정사각형의 한 변의 길이를 계산
              board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
              // 최대 크기를 업데이트
              maxSize = Math.max(maxSize, board[i][j]);
          }
      }
  }

  // 최대 정사각형의 넓이를 반환 (변의 길이의 제곱)
  return maxSize * maxSize;
}

// 예제 입력
const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0]
];

console.log(solution(board));  // 출력: 9 (3x3 크기의 정사각형)


console.log(
  solution([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
); // 9
