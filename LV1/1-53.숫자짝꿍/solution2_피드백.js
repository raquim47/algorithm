// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function sub(s) {
  const numbers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (let i = 0; i < s.length; i++) {
    numbers[s[i]] += 1;
  }

  return numbers;
}

// console.log(sub('123')); //
// console.log(sub('100')); //

function solution(X, Y) {
  const xx = Object.entries(sub(X));
  const yy = Object.entries(sub(Y));
  console.log(xx, yy);

  const result = [];
  for (let i = 0; i < xx.length; i++) {
    if (xx[i][1] > 0 && yy[i][1] > 0) {
      console.log(xx[i], yy[i]);
      let min = Number.MAX_SAFE_INTEGER;
      if (xx[i][1] < yy[i][1]) {
        min = xx[i][1];
      } else {
        min = yy[i][1];
      }

      console.log('min', min);
      for (let j = 0; j < min; j++) {
        result.unshift(xx[i][0]);
      }
    }
  }

  console.log('result', result);

  return result.join('');
}


// console.log(solution("100", "2345")); //	"-1"
// console.log(solution("100", "203045")); //"0"
// console.log(solution("100", "123450")); //	"10"
console.log(solution("12321", "42531")); //"321"
console.log(solution("5525", "1255")); //"552"
