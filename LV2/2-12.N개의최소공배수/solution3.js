// https://school.programmers.co.kr/learn/courses/30/lessons/12953
const gdc = (a, b) => {
  return a % b === 0 ? b : gdc(b, a % b);
};
function solution(arr) {
  return arr.reduce((acc, cur) => acc * cur / gdc(acc, cur))
}


console.log(solution([2, 6, 8, 14])); //		168
