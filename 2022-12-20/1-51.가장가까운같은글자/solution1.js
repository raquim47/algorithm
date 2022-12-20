// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  let arr = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let temp = -1;

    for (let j = 0; j < str.length; j++) {
      if (s[i] === str[j]) {
        temp = i - j;
        break
      }
    }
    str += s[i];
    arr.push(temp);
  }
  return arr;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
