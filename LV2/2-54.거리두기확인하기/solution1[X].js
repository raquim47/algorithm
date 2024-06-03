// https://school.programmers.co.kr/learn/courses/30/lessons/81302#fn1

// 'POOOP', // 'POOPX' // 'PXOPX' // 'OOOXX' // 'PXPXP'
// 'OXXOX', // 'OXPXP' // 'OXOXP' // 'XOOOX' // 'XPXPX'
// 'OPXPX', // 'PXXXO' // 'OXPOX' // 'OOOXX' // 'PXPXP'
// 'OOXOX', // 'OXXXO' // 'OXXOP' // 'OXOOX' // 'XPXPX'
// 'POXXP'  // 'OOOPP' // 'PXPOX' // 'OOOOO' // 'PXPXP'

function isSafety(map, x, y) {
  // 왼쪽 검사
  if (x > 0 && map[y][x - 1] === 'P') return false;
  if (x > 1 && map[y][x - 2] === 'P' && map[y][x - 1] !== 'X') return false;

  // 오른쪽 검사
  if (x < 4 && map[y][x + 1] === 'P') return false;
  if (x < 3 && map[y][x + 2] === 'P' && map[y][x + 1] !== 'X') return false;

  // 아래쪽 검사 (y === 4인 경우 아래쪽은 검사하지 않습니다)
  if (y < 4) {
    if (map[y + 1][x] === 'P') return false;
    if (y < 3 && map[y + 2][x] === 'P' && map[y + 1][x] !== 'X') return false;

    // 대각선 왼쪽 아래
    if (
      x > 0 &&
      map[y + 1][x - 1] === 'P' &&
      (map[y][x - 1] !== 'X' || map[y + 1][x] !== 'X')
    )
      return false;

    // 대각선 오른쪽 아래
    if (
      x < 4 &&
      map[y + 1][x + 1] === 'P' &&
      (map[y][x + 1] !== 'X' || map[y + 1][x] !== 'X')
    )
      return false;
  }

  return true;
}

function roomCheck(room) {
  for (let y = 0; y < room.length; y++) {
    for (let x = 0; x < room[y].length; x++) {
      if (room[y][x] === 'P') {
        if (!isSafety(room, x, y)) {
          return false;
        }
      }
    }
  }
  return true;
}

function solution(places) {
  const answer = [];
  for (let r = 0; r < places.length; r++) {
    answer.push(+roomCheck(places[r]));
  }
  return answer;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
); // [1, 0, 1, 1, 1]
