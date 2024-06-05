// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  let count = [0, 0]; // [0의 개수, 1의 개수]

  function compress(x, y, size) {
      if (size === 1) { 
          count[arr[x][y]]++;
          return;
      }

      let initial = arr[x][y];
      let uniform = true;

      for (let i = x; i < x + size; i++) {
          for (let j = y; j < y + size; j++) {
              if (arr[i][j] !== initial) {
                  uniform = false;
                  break;
              }
          }
          if (!uniform) break;
      }

      if (uniform) { // 모든 값이 동일하면
          count[initial]++; // 해당 숫자의 카운트를 증가
      } else { // 다르면 4개의 영역으로 나눔
          let half = size / 2;
          compress(x, y, half);
          compress(x, y + half, half);
          compress(x + half, y, half);
          compress(x + half, y + half, half);
      }
  }

  compress(0, 0, arr.length);
  return count;
}

// console.log(
//   solution([
//     [1, 1, 0, 0],
//     [1, 0, 0, 0],
//     [1, 0, 0, 1],
//     [1, 1, 1, 1],
//   ])
// ); // 	[4,9]

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
); // [10,15]
