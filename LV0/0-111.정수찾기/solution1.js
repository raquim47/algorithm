// https://school.programmers.co.kr/learn/courses/30/lessons/181840

function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}
// function solution(num_list, n) {
//   const existingIndex = num_list.findIndex(v => v === n);
//   return existingIndex === -1 ? 0 :1
// }

console.log(solution([1, 2, 3, 4, 5], 3)); //	1
