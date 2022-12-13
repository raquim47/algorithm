// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript

// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  let str = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) {
      str += my_string[i];
    }
  }
  return str;
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
