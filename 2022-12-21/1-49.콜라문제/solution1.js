// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

function solution(a, b, n) {
  
  // 2,1,20
  let answer = 0;
  let rest = 0;

  while(n >= a){
    rest = n % a
    n = Math.floor(n / a); //  3개중에 2개 내고 콜라 1개 받음 -> 빈병 1개
    answer += n; // 콜라 1개 받음
    n += rest;
  } 
  
  
  return answer;
}
console.log(solution(2, 1, 20)); //19
// console.log(solution(3, 1, 20)); //	9
