// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let count = 0;
  for (let i = 1; i < topping.length; i++) {
    const left = new Set(topping.slice(0, i)) 
    const right = new Set(topping.slice(i)) 
    if(left.size === right.size) count++;
  }
  return count;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
