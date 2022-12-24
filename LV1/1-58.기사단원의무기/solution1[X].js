// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function solution(number, limit, power) {
  // 약수의 개수 구하기
  let divisorNumArr = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    divisorNumArr.push(count);
  }

  let calc = 0;
  for (let i = 0; i < divisorNumArr.length; i++) {
    if(divisorNumArr[i] > limit){
      calc += power;
    } else {
      calc += divisorNumArr[i];
    }
  }

  return calc
}
// 시간초과

// console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
