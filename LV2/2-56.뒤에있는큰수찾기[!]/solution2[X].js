// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const answer = [];
  const imsi = {};
  let before = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    if (before < current) {
      answer[i - 1] = current;
    } else {
      imsi[i - 1] = before;
    }

    for (const idx in imsi) {
      if (imsi[idx] < current) {
        answer[idx] = current;
        delete imsi[idx];
      }
    }
    before = current;
  }
  for (const idx in imsi) {
    answer[idx] = -1;
  }
  answer.push(-1);
  return answer;
}

// console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
