// https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

function sub(letter, push, type) {
  for (let i = 0; i < type.length; i++) {
    if (letter === type[i]) {
      if (i + push < type.length - 1) {
        return type[i + push];
      } else {
        return type[(i + push) % type.length];
      }
    }
  }
}

function solution(s, n) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else if (s[i] >= "a") {
      answer += sub(s[i], n, lowerCase);
    } else {
      answer += sub(s[i], n, upperCase);
    }
  }

  return answer;
}
console.log(solution("aAa", 27));
// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1)); // "a"
// console.log(solution("a B z", 4)); // "e F d"
