// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0;
  (function dfs(index, sum) {
    if (index === numbers.length) {
      count += sum === target;
      return;
  }


    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  })(0, 0);
  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
