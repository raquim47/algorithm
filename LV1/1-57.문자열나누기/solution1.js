// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
  let start = "";
  let match = 0;
  let noMatch = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      count += 1;
      break;
    }

    if (!start) {
      start = s[i];
    }

    if (start === s[i]) {
      match += 1;
    } else {
      noMatch += 1;
    }

    if (match === noMatch) {
      count += 1;
      noMatch = 0;
      match = 0;
      start = "";
    }
    // if (match === 1 && i === s.length - 1) {
    //   // console.log(s[i]);
    //   count += 1;
    // }
  }

  return count;
}

// console.log(solution("banana")); // 3
// console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3

// console.log(solution("baaa")); // 3