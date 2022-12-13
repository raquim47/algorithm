// https://school.programmers.co.kr/learn/courses/30/lessons/120840?language=javascript

function solution(balls, share) {
  let fac1 = 1;
  let fac2 = 1;
  let fac3 = 1;
  // balls! / (balls - share)! * share!
  for (let i = balls; i >= 1; i--) {
    fac1 = fac1 * i;
  }
  for (let i = balls - share; i >= 1; i--) {
    fac2 = fac2 * i;
  }
  for (let i = share; i >= 1; i--) {
    fac3 = fac3 * i;
  }
  return fac1 / (fac2 * fac3);
}

console.log(solution(3, 2)); //	3
console.log(solution(5, 3)); //10
