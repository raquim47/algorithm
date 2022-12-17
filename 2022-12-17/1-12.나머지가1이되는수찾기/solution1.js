// https://school.programmers.co.kr/learn/courses/30/lessons/87389?language=javascript

function solution(n) {
  let min = 0;
  for (let i = n; i >0; i--) {
    if(n % i === 1){
      min = i;
    }
  }
  return min;
}

console.log(solution(10)); //	3
console.log(solution(12)); //11
