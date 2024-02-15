// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end_num) {
  const result = [];
  for (let i = start; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}

console.log(solution(10, 3)); // 	[10, 9, 8, 7, 6, 5, 4, 3]
