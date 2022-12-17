// https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n) {
  const str = n + "";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return sum;
}

console.log(solution(123)); //	6
console.log(solution(987)); //24
