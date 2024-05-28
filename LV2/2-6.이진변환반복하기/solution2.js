// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;
  while (s !== '1') {
    let filtered = '';
    for (const n of s) {
      if (n === '0') {
        zeroCount++;
      } else {
        filtered += n;
      }
    }
    s = filtered.length.toString(2);
    loopCount++;
  }
  return [loopCount, zeroCount];
}

console.log(solution('110010101001')); // 	[3,8]
