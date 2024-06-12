// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const height = maps.length;
  const width = maps[0].length;
  const visited = Array.from(Array(width), () => Array(height).fill(false));
  const queue = [{ x: 0, y: 0, count: 1 }];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    const { x, y, count } = queue.shift();

    if (x === width - 1 && y === height - 1) return count;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < width &&
        ny >= 0 &&
        ny < height &&
        maps[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push({ x: nx, y: ny, count: count + 1 });
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
