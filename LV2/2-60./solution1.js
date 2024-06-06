// https://school.programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
  const result = [];

  function recursive(n, start, middle, end) {
    if (n == 1) return result.push([start, end]);
    recursive(n - 1, start, end, middle);
    result.push([start, end]);
    recursive(n - 1, middle, start, end);
    return;
  }
  recursive(n, 1, 2, 3);
  return result;
}

console.log(solution(2)); // [ [1,2], [1,3], [2,3] ]
