// https://school.programmers.co.kr/learn/courses/30/lessons/67257
function caculate(a, b, op) {
  if (op === '*') return a * b;
  if (op === '+') return a + b;
  if (op === '-') return a - b;
}

function solution(expression) {
  const parts = expression.split(/([-\+*/])/);
  const operators = new Set(expression.match(/[-+*/]/g));
  const map = [];
  for (let i = 0; i < parts.length; i++) {
    if (operators.has(parts[i])) {
      map.push({ op: parts[i], nums: [parts[i - 1], parts[i + 1]] });
    }
  }

  let max = -Infinity;

  const ops = ['*', '+', '-'];
  for (let i = 0; i < ops.length; i++) {
    let j = 0;
    while (j >= map.length) {
      if (!map[j]) j = 0;
      if (map[j].op === ops[i]) {
        const calValue = caculate(map[j].nums[0], map[j].nums[1], map[j].op);
        const before = map[j - 1];
        const next = map[j + 1];
        if (before) before.nums[1] = calValue;

        if (next) next.nums[0] = calValue;
      } else {
        j++;
      }
    }
    return map;
  }
  return max;
}

console.log(solution('100-200*300-500+20')); // 60420
'100', '-', '60000';
'60000', '-', '500';
'500', '+', '20';
// * + -
// * - +
// + * -
// - * +
// + - *
// - + *
