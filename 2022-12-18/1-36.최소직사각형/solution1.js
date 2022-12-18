// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  // 오름차순 정렬
  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = sizes[i].sort((a, b) => a - b);
  }

  let maxX = -1;
  let maxY = -1;

  for (let i = 0; i < sizes.length; i++) {
    if (maxX < sizes[i][0]) {
      maxX = sizes[i][0];
    }

    if (maxY < sizes[i][1]) {
      maxY = sizes[i][1];
    }

  }

  return maxX * maxY;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
// console.log(
//   solution([
//     [10, 7],
//     [12, 3],
//     [8, 15],
//     [14, 7],
//     [5, 15],
//   ])
// ); //	120
// console.log(
//   solution([
//     [14, 4],
//     [19, 6],
//     [6, 16],
//     [18, 7],
//     [7, 11],
//   ])
// ); //133
