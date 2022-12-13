// https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript

function solution(cipher, code) {
  var answer = "";
  const num = parseInt(cipher.length / code);
  for (let i = 1; i <= num; i++) {
    answer += cipher[code * i - 1];
  }
  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); //	"attack"
console.log(solution("pfqallllabwaoclk", 2)); //	"fallback"
