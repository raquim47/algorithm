// https://school.programmers.co.kr/learn/courses/30/lessons/181853

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0,5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14])); //[1, 4, 12, 14, 15]
