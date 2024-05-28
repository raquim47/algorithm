// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  let n = prices.length;
  let answer = new Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
      while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
          let idx = stack.pop();
          answer[idx] = i - idx;
      }
      stack.push(i);
  }

  // 배열 끝까지 가격이 유지되는 경우 처리
  while (stack.length) {
      let idx = stack.pop();
      answer[idx] = n - idx - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
