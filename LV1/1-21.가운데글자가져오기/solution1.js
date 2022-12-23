// https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

console.log(solution("abcde")); //	"c"
console.log(solution("qwer")); // "we"
