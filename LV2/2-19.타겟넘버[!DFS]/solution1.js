// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0;
  const stack = [[0, 0]];

  while (stack.length > 0) {
    const [sum, index] = stack.pop();

    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
    } else {
      stack.push([sum - numbers[index], index + 1]);
      stack.push([sum + numbers[index], index + 1]);
    }
  }

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
