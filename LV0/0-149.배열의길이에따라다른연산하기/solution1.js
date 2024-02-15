// https://school.programmers.co.kr/learn/courses/30/lessons/181854

// function solution(arr, n) {
//   if(arr.length % 2 === 0){
//     for (let i = 1; i < arr.length; i+=2) {
//       arr[i] = arr[i] + n;
//     }
//   } else {
//     for (let i = 0; i < arr.length; i+=2) {
//       arr[i] = arr[i] + n;
//     }
//   }

//   return arr;
// }

function solution(arr, n) {
  const startIndex = +(arr.length % 2 === 0);

  for (let i = startIndex; i < arr.length; i += 2) {
    arr[i] = arr[i] + n;
  }

  return arr;
}
console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
