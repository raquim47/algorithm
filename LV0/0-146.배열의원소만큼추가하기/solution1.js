// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i])
    }
  }
  return result;
}

// function solution(arr) {
//   return arr.flatMap(val => Array(val).fill(val));
// }
console.log(solution([5, 1, 4])); // 	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
