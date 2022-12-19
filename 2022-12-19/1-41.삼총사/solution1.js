// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (j !== i) {
        for (let k = 0; k < number.length; k++) {
          if (k !== i && k !== j) {
            if(number[i] + number[j] + number[k] === 0){
              count++;
            }
          }
        }
      }
    }
  }
  return count / 6;
}

// console.log(solution([-2, 3, 0, 1])); // 2
// console.log(solution([-2, 3, 0, 2, -5])); // 2
// console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
