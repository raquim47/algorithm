// https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript

// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    let paredStr = parseInt(my_string[i]);
    if (paredStr > 0) {
      answer += paredStr;
    }
  }
  return answer;
}

console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123")); // 16
