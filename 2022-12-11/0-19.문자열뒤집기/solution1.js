// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  // 1. 문자열을 배열로 만들기
  // 2. 배열 거꾸로 뒤집기
  let arr = [];
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    answer.push(arr[arr.length - (1 + j)]);
  }
  return answer.join("");
}

console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); // "daerb"
