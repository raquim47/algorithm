// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const stack = [];
  const answer =[];

  for (let i = 0; i < prices.length; i++) {
    while(stack.length && prices[stack[stack.length - 1]] > prices[i]){
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i)
  }
  while(stack.length){
    const idx = stack.pop();
    answer[idx]= prices.length - 1 - idx;
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
