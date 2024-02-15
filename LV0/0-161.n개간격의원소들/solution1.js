// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i+=n) {
    result.push(num_list[i]);
  }
  return result;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // 	[4, 6, 7]
