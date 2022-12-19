// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

function solution(n) {
  let primeCount = 0;
  for (let i = 1; i <= n; i += 2) {
    let isPrime = true;

    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if ((i !== 2 && i % 2 === 0) || i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCount++;
    }
  }

  return primeCount;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
