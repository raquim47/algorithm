// https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript

// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }
  return answer;
}

console.log(solution("cccCCC")); //	"CCCccc"
console.log(solution("abCdEfghIJ")); //	"ABcDeFGHij"
