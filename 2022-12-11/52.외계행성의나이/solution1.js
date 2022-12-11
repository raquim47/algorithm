// https://school.programmers.co.kr/learn/courses/30/lessons/120834?language=javascript

function solution(age) {
  const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const str = age + "";
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    answer += arr[parseInt(str[i])];
  }
  return answer;
}

console.log(solution(23)); //"cd"
console.log(solution(51)); //"fb"
console.log(solution(100)); //"baa"
