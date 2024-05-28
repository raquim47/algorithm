// https://school.programmers.co.kr/learn/courses/30/lessons/76502

// 회전 문자열 생성 개선: 현재 방식은 배열을 회전시키기 위해 split, splice, ... 연산을 사용하는데, 이는 비효율적입니다. 문자열 슬라이싱과 연결만으로 회전을 효율적으로 처리할 수 있습니다.

function isValid(str) {
  const stack = [];
  const brackets = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  if (brackets[str[0]]) return false;

  for (const char of str) {
    if (!brackets[char]) {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== brackets[char]) return false;
  }
  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) count++;
  }

  return count;
}

console.log(solution('[](){}')); // 3
// console.log(solution("}]()[{")); // 2
