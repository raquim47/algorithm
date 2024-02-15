// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  const obj = { w : 1 , s : -1, d : 10, a : -10}
  for (const v of control) {
    n += obj[v]
  } 
  return n;
}
console.log(solution(0, 'wsdawsdassw')); // -1
