// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
  if (k % 2) {
    arr.forEach((el) => el * k);
  } else {
    arr.forEach((el) => el + k);
  }
  return arr;
}

// const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

console.log(solution([1, 2, 3, 100, 99, 98], 3)); //[3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); //[3, 4, 5, 102, 101, 100]
