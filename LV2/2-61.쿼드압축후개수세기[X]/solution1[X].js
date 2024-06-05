// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  // function recursive (){

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr[i].length; j++) {
  //       const element = arr[i][j];
  //       console.log(element)
  //     }
  //   }
  // }
  // recursive()
  const answer = [0, 0];
  const first = arr[0][0];
  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr[i].length; j++) {
      const e1 = arr[i][j];
      const e2 = arr[i + 1][j];
      if (first !== e1 || first !== e2) {
        const newArr = [];

      }
    }
  }
  answer[first] = answer[first] + 1;

  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
); // 	[4,9]

// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//     [0, 1, 0, 0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//   ])
// ); // [10,15]
