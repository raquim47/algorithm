// https://school.programmers.co.kr/learn/courses/30/lessons/67257

function permute(arr) {
  const result = [];
  permuteHelper(arr, []);
  return result;

  function permuteHelper(remaining, current) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      const newCurrent = current.concat(remaining[i]);
      console.log(i, newRemaining, newCurrent)
      permuteHelper(newRemaining, newCurrent);
    }
  }
}

function calculate(a, b, op) {
  if (op === '*') return a * b;
  if (op === '+') return a + b;
  if (op === '-') return a - b;
}

function solution(expression) {
  const nums = [],
    ops = [];
  let currentNum = '';

  // Parse expression once to fill nums and ops
  for (const char of expression) {
    if ('+*-'.includes(char)) {
      if (currentNum) nums.push(parseInt(currentNum));
      currentNum = '';
      ops.push(char);
    } else {
      currentNum += char;
    }
  }
  if (currentNum) nums.push(parseInt(currentNum));

  const allPerms = permute([...new Set(ops)]);
  let max = -Infinity;

  allPerms.forEach((perm) => {
    const n = nums.slice();
    const o = ops.slice();

    perm.forEach((op) => {
      for (let i = 0; i < o.length; ) {
        if (o[i] === op) {
          n[i] = calculate(n[i], n[i + 1], op);
          n.splice(i + 1, 1);
          o.splice(i, 1);
        } else {
          i++;
        }
      }
    });
    max = Math.max(max, Math.abs(n[0]));
  });

  return max;
}

console.log(solution('100-200*300-500+20')); // 60420
