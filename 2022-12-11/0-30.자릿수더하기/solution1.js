// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript

// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  let sum = 0;
  for (let i = 0; i < (n + "").length; i++) {
    sum += parseInt((n + "")[i]);
  }
  return sum;
}

console.log(solution(1234)); //10
console.log(solution(930211)); //16
