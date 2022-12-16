// https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=javascript

function solution(n) {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0){
      number+=2
    } else {
      number++;
    }
  }
  return number;
}
console.log(solution(9))// 14
// console.log(solution(3))// 4
// console.log(solution(15)); //25
// console.log(solution(40)); //76
