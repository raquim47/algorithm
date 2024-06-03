// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const temp = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (temp < numbers[j]) {
        numbers[i] = numbers[j];
        break;
      }
    }

    if (temp === numbers[i]) {
      numbers[i] = -1;
    }
  }
  return numbers;
}
// console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
