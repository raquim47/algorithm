// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function checkStr(str) {
  const map = { ']': '[', ')': '(', '}': '{' };
  if (map[str[0]]) return false;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.length && stack.at(-1) === map[str[i]]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return !stack.length;
}

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.split('');
    const spliced = str.splice(0, i);
    if (checkStr([...str, ...spliced])) answer++;
  }
  return answer;
}

console.log(solution('[](){}')); // 3
// console.log(solution("}]()[{")); // 2
