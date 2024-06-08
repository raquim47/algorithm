// https://school.programmers.co.kr/learn/courses/30/lessons/154540

function solution(maps) {
  const countArr = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const arr = maps.map((m) => m.split(''));
  const n = arr.length;
  const m = arr[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < n && y < m;
  }

  function dfs(x, y) {
    let count = parseInt(arr[x][y]);
    visited[x][y] = true;
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (isValid(nx, ny) && !visited[nx][ny] && arr[nx][ny] !== 'X') {
        count += dfs(nx, ny);
      }
    }
    return count;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && arr[i][j] !== 'X') {
        const countDay = dfs(i, j);
        countArr.push(countDay);
      }
    }
  }

  return countArr.length !== 0 ? countArr.sort((a, b) => a - b) : [-1];
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])); // [1, 1, 27]]
