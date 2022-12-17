// https://school.programmers.co.kr/learn/courses/30/lessons/12925?language=javascript
function numberCheck(value, start) {
  const numbers = "0123456789";
  let result = 0;

  for (let i = start; i < value.length; i++) {
    const digit = value.length - 1 - i;

    for (let j = 0; j < numbers.length; j++) {
      if (value[i] === numbers[j]) {
        result += j * 10 ** digit;
        break;
      }
    }
  }

  return result;
}

function solution(s) {
  let sign = s[0];

  if (sign === "-") {
    return numberCheck(s, 1) * -1;
  } else if (sign === "+") {
    return numberCheck(s, 1);
  } else {
    return numberCheck(s, 0);
  }
}

console.log(solution("+100"));
