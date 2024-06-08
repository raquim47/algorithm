// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      n--;
      count++;
    } else {
      n = n / 2;
    }
  }
  return count;
}

// console.log(solution(5)); //	2
// console.log(solution(6)); //	2
console.log(solution(5000)); //	5
