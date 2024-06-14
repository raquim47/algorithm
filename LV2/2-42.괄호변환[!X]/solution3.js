// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  if (!p) return p;

  let balance = 0;
  let index = 0;

  do {
    balance += p[index] === '(' ? 1 : -1;
    index++;
  } while (balance !== 0);

  const u = p.slice(0, index);
  const v = solution(p.slice(index));
  if (u[0] === '(') {
    return u + v;
  } else {
    const reversed = u
      .slice(1, -1)
      .split('')
      .reduce((acc, char) => acc + (char === '(' ? ')' : '('), '');
    console.log(reversed);
    return `(${v})${reversed}`;
  }
}

// console.log(solution('()))((()')); // "()(())()"
console.log(solution('))((()()')); // "(()())"
