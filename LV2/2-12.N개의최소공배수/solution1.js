// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const factors = {};
    let n = arr[i];

    while (n % 2 === 0) {
      factors[2] = (factors[2] || 0) + 1;
      n /= 2;
    }
    for (let j = 3; j * j <= n; j += 2) {
      while (n % j === 0) {
        factors[j] = (factors[j] || 0) + 1;
        n /= j;
      }
    }

    if (n > 2) {
      factors[n] = (factors[n] || 0) + 1;
    }

    for (const key in factors) {
      map[key] = (map[key] || 0) < factors[key] ? factors[key] : map[key];
    }
  }

  let answer = 1;
  for (const key in map) {
    answer *= key ** map[key];
  }

  return answer;
}

console.log(solution([2, 6, 8, 14])); //		168
