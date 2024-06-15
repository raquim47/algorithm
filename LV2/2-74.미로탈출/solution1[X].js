// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {
  const height = maps.length;
  const width = maps[0].length;
  let visited = Array.from(Array(height), () => Array(width).fill(false));
  const queue = [{ x: 0, y: 0, count: 0 }];
  let startFound = false;
  let leverFound = false;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    const { x, y, count } = queue.shift();
    console.log(maps[y][x], x, y, count, startFound, leverFound)
    if (maps[y][x] === 'S') {
      startFound = true;
      visited = Array.from(Array(height), () => Array(width).fill(false));
    } else if (startFound && maps[y][x] === 'L') {
      leverFound = true;
      visited = Array.from(Array(height), () => Array(width).fill(false));
    } else if (leverFound && maps[y][x] === 'E') {
      return count;
    }
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < width &&
        ny >= 0 &&
        ny < height &&
        (maps[ny][nx] === 'O' ||
          maps[ny][nx] === 'L' ||
          maps[ny][nx] === 'E') &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push({ x: nx, y: ny, count: startFound ? count + 1 : 0 });
      }
    }
  }

  return -1;
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
