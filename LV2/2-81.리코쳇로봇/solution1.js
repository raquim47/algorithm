// https://school.programmers.co.kr/learn/courses/30/lessons/169199

function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(Infinity));
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const queue = [];

  let startX, startY, endX, endY;
  // 'R'과 'G' 위치 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'R') {
        startX = i;
        startY = j;
      }
      if (board[i][j] === 'G') {
        endX = i;
        endY = j;
      }
    }
  }

  // 시작 위치 큐에 추가
  queue.push([startX, startY, 0]);
  visited[startX][startY] = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    // 각 방향으로 최대한 이동
    directions.forEach(([dx, dy]) => {
      let nx = x, ny = y;

      while (true) {
        nx += dx;
        ny += dy;
        // 범위를 벗어나거나 장애물에 부딪히면 중단
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || board[nx][ny] === 'D') {
          nx -= dx;
          ny -= dy;
          break;
        }
      }

      // 이동한 위치가 유효하고 최소 이동 횟수를 갱신할 수 있는 경우
      if (visited[nx][ny] > count + 1) {
        visited[nx][ny] = count + 1;
        queue.push([nx, ny, count + 1]);
      }
    });
  }

  // 목표 위치에 도달할 수 있는지 확인
  const result = visited[endX][endY];
  return result === Infinity ? -1 : result;
}


console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'])); // 	7
