// https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript

function solution(order) {
  let str = order + "";
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] == 3 || str[i] == 6 || str[i] == 9){
      answer++;
    }
  }
  return answer;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
