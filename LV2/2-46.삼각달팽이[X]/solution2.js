// https://school.programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const total = (n * (n + 1)) / 2;
  const arr = Array.from({ length: n }, (_, i) => new Array(i + 1));
  let current = 1;
  let x = 0,
    y = 0;
  let direction = 0;
  let directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  while (current <= total) {
    arr[y][x] = current;
    let ny = y + directions[direction][0];
    let nx = x + directions[direction][1];

    if (ny >= n || nx > ny || nx < 0 || arr[ny][nx] !== undefined) {
      direction = (direction + 1) % 3;
      ny = y + directions[direction][0];
      nx = x + directions[direction][1];
    }

    y = ny;
    x = nx;
    current++;
  }
  
  return arr.flat();
}

console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
