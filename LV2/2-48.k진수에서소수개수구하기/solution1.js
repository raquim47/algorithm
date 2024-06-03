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
  const kDecimal = n.toString(k);
  let count = 0;
  let str = '';

  for (let i = 0; i < kDecimal.length; i++) {
    const num = kDecimal[i];
    if (num !== '0') {
      str += num;
    }

    if (num === '0' || i === kDecimal.length - 1) {
      console.log(isPrime(+str));
      count += +isPrime(+str);
      str = '';
    }
  }
  return count;
}

// console.log(solution(437674, 3)); // 3
// console.log(solution(011, 10)); // 2
