// https://school.programmers.co.kr/learn/courses/30/lessons/67257
function perm(arr, dep, res) {
  if (dep === arr.length) res.push(arr.slice());

  for (let i = dep; i < arr.length; i++) {
    arr[i] = [arr[dep], (arr[dep] = arr[i])][0];
    perm(arr, dep + 1, res);
    arr[i] = [arr[dep], (arr[dep] = arr[i])][0];
  }
  return res;
}

function calculate(a, b, op) {
  if (op === '*') return a * b;
  if (op === '+') return a + b;
  if (op === '-') return a - b;
}

function solution(expression) {
  const parts = expression.split(/([-\+*/])/);
  const operators = [...new Set(parts.filter((part) => /[-+*]/.test(part)))];
  const allPerms = perm(operators, 0, []);
  let max = -Infinity;
  
  allPerms.forEach(perm => {

    let nums = parts.filter(part => !/[-+*]/.test(part)).map(Number);
    let ops = parts.filter(part => /[-+*]/.test(part));

    perm.forEach(op => {
      for (let i = 0; i < ops.length; i++) {
        if(ops[i] === op){
          const result = calculate(nums[i], nums[i + 1], ops[i]);
          nums[i] = result;
          nums.splice(i + 1, 1);
          ops.splice(i, 1);
          i--
        }
      }
    })
    max = Math.max(max, Math.abs(nums[0]));
  })
  return max
}

console.log(solution('100-200*300-500+20')); // 60420
