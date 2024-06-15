// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function bfs(maps, start, end) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rows = maps.length,
    cols = maps[0].length;
  const queue = [{ x: start.x, y: start.y, dist: 0 }];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start.y][start.x] = true;

  while (queue.length) {
    const { x, y, dist } = queue.shift();
    if (x === end.x && y === end.y) return dist;

    directions.forEach(([dx, dy]) => {
      const nx = x + dx,
        ny = y + dy;
      if (
        nx >= 0 &&
        nx < cols &&
        ny >= 0 &&
        ny < rows &&
        maps[ny][nx] !== 'X' &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push({ x: nx, y: ny, dist: dist + 1 });
      }
    });
  }
  return -1;
}

function solution(maps) {
  const points = {};
  maps.forEach((row, y) => {
    row.split('').forEach((cell, x) => {
      if (cell === 'S' || cell === 'L' || cell === 'E') points[cell] = { x, y };
    });
  });

  const toLever = bfs(maps, points['S'], points['L']);
  if (toLever === -1) return -1; // 레버에 도달할 수 없음

  const toExit = bfs(maps, points['L'], points['E']);
  if (toExit === -1) return -1; // 출구에 도달할 수 없음

  return toLever + toExit; // 전체 이동 시간 합산
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'])); // 16

// console.log(solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'])); // -1

// [
//   'SOOOL',
//   'XXXXO',
//   'OOOOO',
//   'OXXXX',
//   'OOOOE'
// ]
