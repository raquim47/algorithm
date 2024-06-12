// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const set = new Set();
  const extended = elements.concat(elements);
  for (let i = 1; i <= elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += extended[j];
    }
    set.add(sum);

    for (let j = 1; j < elements.length; j++) {
      sum = sum - extended[j - 1] + extended[j + i - 1];
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
