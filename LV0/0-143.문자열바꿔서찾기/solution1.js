// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  let str = '';
  for (const v of myString) {
    str += v === 'A' ? 'B' : 'A';
  }
  return +str.includes(pat);
}

console.log(solution('ABBAA', 'AABB')); // 	1
