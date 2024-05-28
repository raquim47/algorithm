// https://school.programmers.co.kr/learn/courses/30/lessons/60057

// 따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
function solution(s) {
  if (s.length === 1) return 1;

  let minLength = s.length;ㅌ

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let compressed = '';
    let prev = s.slice(0, i);
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const current = s.slice(j, j + i);
      if (prev === current) {
        count++;
      } else {
        compressed += (count > 1 ? count : '') + prev;
        prev = current;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : '') + prev;
    minLength = Math.min(minLength, compressed.length);
  }
  return minLength;
}

console.log(solution('abcabcdede')); // 8
// console.log(solution('ababcdcdababcdcd')); // 9
