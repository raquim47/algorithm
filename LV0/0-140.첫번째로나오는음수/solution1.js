// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list) {
  return num_list.findIndex((v) => v < 0);
}

console.log(solution([13, 22, 53, 24, 15, 6])); // -1
