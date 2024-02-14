// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  return Number('' + a + b) > Number('' + b + a)
    ? Number('' + a + b)
    : Number('' + b + a);
}

// function solution(a, b) {
//   return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
// }
console.log(solution(89, 8)); // 898
