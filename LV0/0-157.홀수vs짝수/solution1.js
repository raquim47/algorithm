// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  let oddAcc = 0;
  let evenAcc = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      oddAcc += num_list[i];
    } else {
      evenAcc += num_list[i];
    }
  }

  return Math.max(oddAcc, evenAcc);
}

console.log(solution([-1, 2, 5, 6, 3])); //8
