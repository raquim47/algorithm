// https://school.programmers.co.kr/learn/courses/30/lessons/120852?language=javascript

function solution(n) {
  let num = n;
  let isFactor = false;
  let arr = [];
  let arrIndex = 0;
  for (let i = 2; i < n; i++) {
    while (num % i === 0) {
      isFactor = true;
      num = num / i;
    }
    if (isFactor) {
      arr[arrIndex] = i;
      arrIndex++;
      isFactor = false;
    }
  }
  if (!arr[0]) {
    arr.push(n);
  }
  return arr;
}

console.log(solution(9000)); //	[2, 3 , 5]
// console.log(solution(12)); //	[2, 3]
// console.log(solution(17)); //[17]
// console.log(solution(420)); //[2, 3, 5, 7]
