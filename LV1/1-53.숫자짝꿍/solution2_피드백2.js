// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function numberCounter(s) {
  const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < s.length; i++) {
      numbers[s[i]] += 1;
  }

  return numbers;
}

// console.log(numberCounter('123')); // [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
// console.log(numberCounter('100')); // [2, 1, 0, 0, 0, 0, 0, 0, 0, 0]

function solution(x, y) {
  const xx = numberCounter(x);
  const yy = numberCounter(y);
  // console.log(xx, yy);

  let result = '';
  for (let i = 0; i < xx.length; i++) {
      const a = xx[i];
      const b = yy[i];

      if (a > 0 && b > 0) {
          // console.log(key, a, b);

          for (let j = 0; j < Math.min(a, b); j++) {
              result = i + result;
          }
      }
  }
  // console.log('result', result);
  if (result === '') {
      return '-1';
  }

  if (result[0] === '0') {
      return '0';
  }

  return result;
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"