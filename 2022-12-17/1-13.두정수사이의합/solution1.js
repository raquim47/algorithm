// https://school.programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
function sum(v1, v2) {
  let calc = 0;
  for (let i = v1; i <= v2; i++) {
    calc += i;
  }
  return calc;
}

function solution(a, b) {
  if (a === b) {
    return a;
  } else if (a < b) {
    return sum(a, b);
  } else {
    return sum(b, a);
  }
}

console.log(solution(3, 5)); //12
console.log(solution(3, 3)); //	3
console.log(solution(5, 3)); //12
