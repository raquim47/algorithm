// https://school.programmers.co.kr/learn/courses/30/lessons/120878?language=javascript

function solution(a, b) {
  // 분자의 분모의 약수를 각각 새 배열에 담는다.
  const r1 = [];
  const r2 = [];
  for (let i = 1; i <= a; i++) {
    a % i == 0 && r1.push(i);
  }
  for (let i = 1; i <= b; i++) {
    b % i == 0 && r2.push(i);
  }
  // r1, r2의 공통요소를 새 배열에 담는다.
  // 내림차순으로 정렬해서 최대값을 찾는다 (-> 최대공약수) 
  let arr2 = [];
  r1.forEach((a) => r2.forEach((b) => a == b && arr2.push(a)));
  arr2.sort((a , b) => b - a);
  
  // b를 최대공약수로 나눈 값의 소인수를 찾는다.
  // 2나 5만 가능
  const denom = b / arr2[0];
  for (let i = 2; i <= denom; i++) {
    if(denom % i === 0){
      if(i % 2 !== 0 && i % 5 !== 0){
        return 2;
      }
    }
  }
  return 1;
}

// console.log(solution(1, 30)); // 2
console.log(solution(4, 8)); // 1

console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
