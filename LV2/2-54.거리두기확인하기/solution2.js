// https://school.programmers.co.kr/learn/courses/30/lessons/81302#fn1

// 'POOOP', // 'POOPX' // 'PXOPX' // 'OOOXX' // 'PXPXP'
// 'OXXOX', // 'OXPXP' // 'OXOXP' // 'XOOOX' // 'XPXPX'
// 'OPXPX', // 'PXXXO' // 'OXPOX' // 'OOOXX' // 'PXPXP'
// 'OOXOX', // 'OXXXO' // 'OXXOP' // 'OXOOX' // 'XPXPX'
// 'POXXP'  // 'OOOPP' // 'PXPOX' // 'OOOOO' // 'PXPXP'

function isSafety(map, x, y) {
  if (map[y][x - 1] !== 'X') {
    if (map[y][x - 1] === 'P') return false;
    if (map[y][x - 2] === 'P') return false;
  }

  if (map[y][x + 1] !== 'X') {
    if (map[y][x + 1] === 'P') return false;
    if (map[y][x + 2] === 'P') return false;
  }

  if (y === 4) return true;

  if (map[y + 1][x] !== 'X') {
    if (map[y + 2][x] === 'P') return false;
  }

  if (map[y][x - 1] !== 'X' || map[y + 1][x] !== 'X') {
    if (map[y + 1][x - 1] === 'P') return false;
  }

  if (map[y][x + 1] !== 'X' || map[y + 1][x] !== 'X') {
    if (map[y + 1][x + 1] === 'P') return false;
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
