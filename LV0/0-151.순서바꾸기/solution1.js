// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  return [...num_list.splice(n), ...num_list];
}

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
