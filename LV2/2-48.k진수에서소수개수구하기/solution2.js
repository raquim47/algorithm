// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(n) {
  if (n === 2) return true;
  if (n <= 1 || n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  const candidates = n.toString(k).split('0');
  return candidates.filter((v) => isPrime(+v)).length;
}

console.log(solution(437674, 3)); // 3
