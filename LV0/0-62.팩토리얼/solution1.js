// https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript

// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = 0;
  for(let i = 1 ; i <= 10; i++) {
      let iFac = 1;
      for (let j = i; j >= 1; j--) {
          iFac = iFac * j;
      }
      if(n >= iFac){
          answer = i;
      } else {
        break;
      }
  }
  return answer;
}

console.log(solution(3628800)); //10
console.log(solution(7)); //	3
