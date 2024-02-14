// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i);
  }
  return result;
}

console.log(solution(3, 10)); //	[3, 4, 5, 6, 7, 8, 9, 10]
