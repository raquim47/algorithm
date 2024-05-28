// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0;
  const stack = [{ index: 0, sum: 0 }];

  while (stack.length > 0) {
      const { index, sum } = stack.pop();

      if (index === numbers.length) {
          if (sum === target) {
              count++;
          }
      } else {
          stack.push({ index: index + 1, sum: sum + numbers[index] });
          stack.push({ index: index + 1, sum: sum - numbers[index] });
      }
  }

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
