// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  const map = board.map((v) => v.split(''));
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let removeCount = 0;
  while (true) {
    console.log(map);
    const removalList = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (!map[y][x]) continue;
        let count = 0;
        directions.forEach(([dy, dx]) => {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < m && nx >= 0 && nx < n) {
            if (map[y][x] === map[ny][nx]) {
              count++;
            }
          }
        });

        if (count >= 3) {
          removalList.push([x, y]);
        }
      }
    }
    console.log(removalList);
    if (removalList.length === 0) return removeCount;
    removeCount += removalList.length;

    for (let i = 0; i < removalList.length; i++) {
      const [x, y] = removalList[i];
      for (let j = y; j >= 0; j--) {
        if (j > 0) {
          map[j][x] = map[j - 1][x];
        }
      }
      map[0][x] = null;
    }
    console.log(map);
  }
}

// console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 	14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 	15
