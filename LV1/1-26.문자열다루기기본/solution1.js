// https://school.programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] > -1)) {
      return false;
    }
  }

  if (s.length === 4 || s.length === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
