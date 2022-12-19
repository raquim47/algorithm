// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

function solution(n) {
  let  primeCount = 0;
  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if(i % j === 0){
        isPrime = false;
        break;
      }
    }

    if(isPrime){
      primeCount++;
    }
  }

  return primeCount
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
