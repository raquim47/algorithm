// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  const map = board.map((v) => v.split(''));
  let totalRemoved = 0;
  while (true) {
    const marked = new Set();
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        const current = map[y][x];
        // 오른쪽 아래 방향으로만 검사해도 된다
        if (
          current &&
          current === map[y][x + 1] &&
          current === map[y + 1][x] &&
          current === map[y + 1][x + 1]
        ) {
          marked.add(`${y},${x}`);
          marked.add(`${y},${x + 1}`);
          marked.add(`${y + 1},${x}`);
          marked.add(`${y + 1},${x + 1}`);
        }
      }
    }

    if (marked.size === 0) return totalRemoved;
    totalRemoved += marked.size;

    // 마킹된 위치를 null로 변경
    marked.forEach((pos) => {
      const [y, x] = pos.split(',').map(Number);
      map[y][x] = null;
    });

    // 열 기준으로 null이 아닌 블록을 아래로 내리기
    console.log(map);
    for (let x = 0; x < n; x++) {
      let targetIdx = m - 1;
      for (let y = m - 1; y >= 0; y--) {
        console.log(targetIdx, y)
        if (map[y][x] !== null) {
          if (targetIdx !== y) {
            map[targetIdx][x] = map[y][x];
            map[y][x] = null;
          }
          targetIdx--;
        }
      }
    }
  }
}

// console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 	14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 	15
