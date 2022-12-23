// https://school.programmers.co.kr/learn/courses/30/lessons/120875?language=javascript

function solution(dots) {
  // 4개의 점 중 2개를 선택해 선을 만드는 경우
  let arr = [];
  let arrI = 0;
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      // 기울기 담기
      const [x1, y1] = dots[i];
      const [x2, y2] = dots[j];
      arr[arrI] = (y2 - y1) / (x2 - x1);
      arrI++;
    }
  }
  // arr에 중복이 있으면 1 없으면 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return 1;
      }
    }
  }
  return 0;
}
// console.log(
//   solution([
//     [1, 4],
//     [9, 2],
//     [3, 8],
//     [11, 6],
//   ])
// ); // 1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0
