// https://school.programmers.co.kr/learn/courses/30/lessons/120921?language=javascript

function solution(A, B) {
  let str = A;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      break;
    }
    count++;
    let newStr = "";
    newStr += str[str.length - 1];
    for (let j = 0; j < str.length - 1; j++) {
      newStr += str[j];
    }
    if (newStr === B) {
      break;
    }
    str = newStr;
  }
  if (count === A.length) {
    return -1;
  } else {
    return count;
  }
}

console.log(solution("h", "h")); //	0
console.log(solution("hello", "ohell")); //	1
console.log(solution("apple", "elppa")); //-1
