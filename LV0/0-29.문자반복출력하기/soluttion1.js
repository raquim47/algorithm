// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  let str = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      str += my_string[i];
    }
  }
  return str;
}

console.log(solution("hello", 3)); //"hhheeellllllooo"
