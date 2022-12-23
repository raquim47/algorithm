// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);
  let count = 0;
  let calc = 0;
  for (let i = 0; i < sortedD.length; i++) {
    if (calc + sortedD[i] <= budget) {
      calc += sortedD[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
// console.log(solution([2, 2, 3, 3], 10)); // 4
