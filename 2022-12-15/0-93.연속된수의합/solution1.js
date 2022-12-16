// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(num, total) {
  const n = total / num; 
  let start = 0;

  if (num % 2 === 0) {
    start = n + 0.5 - num / 2;
  } else {
    start = n - Math.floor(num / 2);
  }
  
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = start++;
  }
  return arr;
}

console.log(solution(5, 15)); //	[1, 2, 3, 4, 5]

// console.log(solution(2, 9)); //	[4,5]
// console.log(solution(2, 3)); //	[1,2]
// console.log(solution(4, 14)); //	[2, 3, 4, 5]
// console.log(solution(4, 10)); //[1,2,3,4]

// console.log(solution(3, 6)); //[1, 2, 3]

// console.log(solution(3, 12)); //	[3, 4, 5]
// console.log(solution(5, 5)); //[-1, 0, 1, 2, 3]
// console.log(solution(3, 9)); //[2, 3, 4]
// console.log(solution(10, 50)); //[1,2,3,4,5,6,7,8,9]
