// https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
