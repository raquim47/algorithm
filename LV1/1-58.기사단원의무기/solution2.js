// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

// 1부터 number까지의 번호를 갖는 기사들의 무기 구매
// 공격력과 동일한 무기를 구매, 공격력은 각 번호의 약수의 개수.
// 공격력이 limit보다 클경우에는 power 수치의 무기를 구매
// 기사들의 공격력을 모두 합해서 반환.

// 약수의 개수 구하기
function toDivisorCount(num) {
  if (num === 1) {
    return 1; // num이 1일때는 예외, 바로 return 1
  }
  // 2. 기사의 번호를 i로 나눠서 0이 되는 수를 센다. -> 약수의 개수
  // 2-1. i의 제곱이 num과 같다면 1만 카운트하고
  // 2-2. 만약 제곱근이 아닌 약수는 2를 카운트(짝이 있기 때문에)
  // 2-3. i의 제곱이 num보다 크거나 같다면 count를 return 하고 종료
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num === i * i) {
      count += 1;
    } 

    if(num <= i * i){
      return count;
    }

    if (num % i === 0) {
      count += 2;
    }
  }
}

// console.log("약수의 개수 : ", toDivisorCount(4));

function solution(number, limit, power) {
  let calc = 0;
  // 1부터 number까지 기사의 번호를 읽음
  for (let i = 1; i <= number; i++) {
    const divisorCount = toDivisorCount(i);
    const attack = divisorCount > limit ? power : divisorCount;
    // 약수의 개수가 limit보다 크면 power, 아니면 그대로
    calc += attack;
  }

  return calc;
}

// console.log(solution(5, 3, 2)); // 10
// console.log(solution(10, 3, 2)); // 21
