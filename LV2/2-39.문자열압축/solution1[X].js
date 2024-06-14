// https://school.programmers.co.kr/learn/courses/30/lessons/60057
// Math.floor(s.length /2)
function solution(s) {
  let maxScore = 0;
  const before = { char: null, count: 0 };

  for (let i = 3; i <= 3; i++) {
    let score = 0;
    for (let j = 0; j < s.length - i; j++) {
      for (let k = j; k <= s.length - i; k += i) {
        const slicedChar = s.slice(k, i + k);
        console.log(j, slicedChar, 'hey');

        // if(before.char === s[j]){
        //   before.count++;
        //   if(before.count > i + 1){
        //     score++;
        //   }
        // } else {
        //   before.char = s[j]
        //   before.count = 1;
        // }
      }
    }

    maxScore = Math.max(score, maxScore);
  }

  // return s.length - maxScore;
}
// console.log(solution('aaaabbb')); // 4a3b
console.log(solution('abcabcdede')); // 8
// console.log(solution('ababcdcdababcdcd')); // 9
// aabbaccc // 2a2ba3c
// ababcdcdababcdcd // 2ababcdcd
