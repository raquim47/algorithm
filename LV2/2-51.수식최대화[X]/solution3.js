// https://school.programmers.co.kr/learn/courses/30/lessons/67257

// permute 호출 | arr : ['+', '-', '*'], start: 0, result : []
// for 루프 시작
// ├─ i = 0
// │  ├─ 스왑: arr[0] <-> arr[0] (변화 없음)
// │  ├─ permute 호출 | arr : ['+', '-', '*'], start: 1, result : []
// │  │  ├─ for 루프 시작
// │  │  ├─ i = 1
// │  │  │  ├─ 스왑: arr[1] <-> arr[1] (변화 없음)
// │  │  │  ├─ permute 호출 | arr : ['+', '-', '*'], start: 2, result : []
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['+', '-', '*']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  │  ├─ i = 2
// │  │  │  ├─ 스왑: arr[1] <-> arr[2]
// │  │  │  ├─ permute 호출 | arr : ['+', '*', '-'], start: 2, result : [['+', '-', '*']]
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['+', '*', '-']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[2]
// │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  └─ 스왑 복원: arr[0] <-> arr[0]

// ├─ i = 1
// │  ├─ 스왑: arr[0] <-> arr[1]
// │  ├─ permute 호출 | arr : ['-', '+', '*'], start: 1, result : [['+', '-', '*'], ['+', '*', '-']]
// │  │  ├─ for 루프 시작
// │  │  ├─ i = 1
// │  │  │  ├─ 스왑: arr[1] <-> arr[1] (변화 없음)
// │  │  │  ├─ permute 호출 | arr : ['-', '+', '*'], start: 2, result : [['+', '-', '*'], ['+', '*', '-']]
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['-', '+', '*']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  │  ├─ i = 2
// │  │  │  ├─ 스왑: arr[1] <-> arr[2]
// │  │  │  ├─ permute 호출 | arr : ['-', '*', '+'], start: 2, result : [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*']]
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['-', '*', '+']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[2]
// │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  └─ 스왑 복원: arr[0] <-> arr[1]

// ├─ i = 2
// │  ├─ 스왑: arr[0] <-> arr[2]
// │  ├─ permute 호출 | arr : ['*', '-', '+'], start: 1, result : [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['-', '*', '+']]
// │  │  ├─ for 루프 시작
// │  │  ├─ i = 1
// │  │  │  ├─ 스왑: arr[1] <-> arr[1] (변화 없음)
// │  │  │  ├─ permute 호출 | arr : ['*', '-', '+'], start: 2, result : [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['-', '*', '+']]
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['*', '-', '+']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  │  ├─ i = 2
// │  │  │  ├─ 스왑: arr[1] <-> arr[2]
// │  │  │  ├─ permute 호출 | arr : ['*', '+', '-'], start: 2, result : [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['-', '*', '+'], ['*', '-', '+']]
// │  │  │  │  ├─ 조건 만족: 2 >= arr.length - 1, 결과에 추가 -> ['*', '+', '-']
// │  │  │  │  └─ 스왑 복원: arr[1] <-> arr[2]
// │  │  └─ 스왑 복원: arr[1] <-> arr[1]
// │  └─ 스왑 복원: arr[0] <-> arr[2]


function permute(arr, start, result) {
  if (start >= arr.length - 1) {
    result.push(arr.slice());
    return;
  }
  for (let i = start; i < arr.length; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]]; 
    permute(arr, start + 1, result);
    [arr[start], arr[i]] = [arr[i], arr[start]]; 
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

  const allPerms = [];
  permute([...new Set(ops)], 0, allPerms);
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
