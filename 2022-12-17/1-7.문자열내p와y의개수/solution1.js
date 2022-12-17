// https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

function solution(s) {
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    }
    if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }
  if (p === y) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("pPoooyY")); //	true
console.log(solution("Pyy")); // false
