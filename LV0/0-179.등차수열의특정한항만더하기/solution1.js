// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  return included.reduce((p, c, i) => (c ? p + a + i * d : p), 0);
}

console.log(solution(3, 4, [true, false, false, true, true])); //		37
