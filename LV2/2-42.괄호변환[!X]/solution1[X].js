// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  function recursive(brackets) {
    const stack = [];
    let u = '';
    let v = '';

    for (let i = 0; i < brackets.length; i++) {
      if (i !== 0 && !stack.length) {
        v += brackets[i];
      } else {
        if (stack[stack.length - 1] === '(' && brackets[i] === ')') {
          stack.pop();
        } else {
          stack.push(brackets[i]);
        }
        u += brackets[i];
      }
    }
    return v;
    // return recursive(s) + recursive(v);
  }
  return recursive(p);
}

console.log(solution('()))((()')); // "()(())()"
