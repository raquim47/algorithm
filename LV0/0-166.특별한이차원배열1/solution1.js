// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = []
    for (let j = 0; j < n; j++) {
      if(j === i){
        arr.push(1)
      } else {
        arr.push(0)
      }
    }
    result.push(arr);
  }
  return result;
}

console.log(solution(3)); //[[1, 0, 0], [0, 1, 0], [0, 0, 1]]
