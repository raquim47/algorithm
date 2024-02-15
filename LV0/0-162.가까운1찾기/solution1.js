// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }

  return -1;
}

// const solution = (a, i) => a.indexOf(1, i);

console.log(solution([1, 1, 1, 1, 0], 3)); // 	3
