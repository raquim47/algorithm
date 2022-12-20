// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let temp = -1;

    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        temp = i - j;
        break;
      }
    }
    arr.push(temp);
  }
  return arr;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
