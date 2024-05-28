// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let count = 0;
  let removed = 0;
  while (s !== '1') {
    const beforeLength = s.length;
    s = s.replace(/0/g, '');
    removed += beforeLength - s.length;
    s = s.length.toString(2);
    count++;
  }
  return [count, removed];
}

console.log(solution('110010101001')); // 	[3,8]
