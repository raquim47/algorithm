// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0;
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [value, i] = queue.shift();
    if (i === numbers.length) {
      if (value === target) {
        count++;
      }
      continue;
    }

    queue.push([value + numbers[i], i + 1]);
    queue.push([value - numbers[i], i + 1]);
  }

  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
