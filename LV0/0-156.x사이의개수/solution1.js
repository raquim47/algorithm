// https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString) {
  return myString.split('x').map(v => v.length);
}

console.log(solution('xabcxdefxghi')); //[0, 3, 3, 3]
