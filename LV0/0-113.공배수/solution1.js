// https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number, n, m) {
  if(number % n === 0 && number % m === 0){
    return 1
  } else {
    return 0
  }
}

console.log(solution(60, 2, 3)); //	1
