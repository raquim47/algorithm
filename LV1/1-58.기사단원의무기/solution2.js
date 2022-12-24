// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function solution(number, limit, power) {
  // 약수의 개수 구하기
  let calc = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i === (j * j)) {
        count += 1;
      }
      if (j * j >= i) {
        break;
      }
      if (i !== 1 && i % j === 0) {
        count += 2;
      }

      // console.log(i, j, count);
    }
    if (count > limit) {
      calc += power;
    } else {
      calc += count;
    }
  }

  return calc;
}

console.log(solution(5, 3, 2)); // 10
// console.log(solution(10, 3, 2)); // 21
