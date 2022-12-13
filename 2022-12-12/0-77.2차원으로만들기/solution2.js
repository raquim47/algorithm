// https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript

function solution(num_list, n) {
  const arr = [];
  for (let j = 0; j < num_list.length / n; j++) {
    arr[0]
    const arr1 = [];
    for (let i = 0; i < n; i++) {
      arr1[i] = num_list[j*n + i];
    }
    arr[j] = arr1;
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
