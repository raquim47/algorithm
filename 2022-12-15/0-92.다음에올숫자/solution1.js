// https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript

function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    // 등차수열
    return common[0] + (common[1] - common[0]) * common.length;
  } else {
    return common[0] * (common[1] / common[0]) ** common.length;
  }
}

console.log(solution([1, 2, 3, 4])); //	5
console.log(solution([2, 4, 8])); //16
console.log(solution([-1, 0, 1, 2]));//3
console.log(solution([-4, -8, -16]));//-32
