// https://school.programmers.co.kr/learn/courses/30/lessons/120808?language=javascript

function solution(denum1, num1, denum2, num2) {
  const arr = [denum1 * num2 + denum2 * num1, num1 * num2];
  const r1 = [];
  const r2 = [];
  let arr2 = [];
  for (let i = 1; i <= arr[0]; i++) {
    arr[0] % i == 0 && r1.push(i);
  }
  for (let i = 1; i <= arr[1]; i++) {
    arr[1] % i == 0 && r2.push(i);
  }
  r1.forEach((a) => r2.forEach((b) => a == b && arr2.push(a)));
  arr2.sort((a, b) => b - a);
  return [(denum1 * num2 + denum2 * num1) / arr2[0], (num1 * num2) / arr2[0]];
}

console.log(solution(1, 2, 3, 4)); //	[5, 4]
console.log(solution(9, 2, 1, 3)); //[29, 6]
