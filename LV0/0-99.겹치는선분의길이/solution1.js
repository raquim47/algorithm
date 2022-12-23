// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let arr = [];
  let arrI = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      arr[arrI] = j + j + 1;
      arrI++;
    }
  }
  // 2개 이상 있는 숫자 저장하기
  let arr2 = [];
  let arr2I = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      let isArr2 = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
          isArr2 = true;
          break;
        }
      }
      if (!isArr2) {
        arr2[arr2I] = arr[i];
        arr2I++;
      }
    }
  }
  return arr2.length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
// console.log(
//   solution([
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ])
// ); // 0
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// ); // 8
