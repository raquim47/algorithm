// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  // "" + "a" === "a"; -> 문자를 배열로 만들 필요가 없음
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[my_string.length - (1 + i)];
  }
  return answer;
}

console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); // "daerb"
