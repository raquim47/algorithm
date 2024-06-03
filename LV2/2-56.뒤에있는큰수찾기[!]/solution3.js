// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

// console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
