// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  const square = num_list.reduce((p, c) => p + c) ** 2;
  const multifly = num_list.reduce((p, c) => p * c);
  return multifly < square ? 1 : 0;
}

console.log(solution([5, 7, 8, 3])); // 0