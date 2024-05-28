// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function reverseBrackets(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed += str[i] === '(' ? ')' : '(';
  }
  return reversed;
}

function solution(p) {
  if (!p) return p;

  let diff = 0,
    u = '',
    v = '';
  for (let i = 0; i < p.length; i++) {
    u += p[i];
    diff += p[i] === '(' ? 1 : -1;
    if (diff === 0) {
      v = solution(p.slice(i + 1));

      if (u[0] === '(' && u[u.length - 1] === ')') {
        return u + v;
      } else {
        return '(' + v + ')' + reverseBrackets(u.slice(1, -1));
      }
    }
  }
}

console.log(solution('()))((()')); // "()(())()"
