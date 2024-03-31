// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  const map = {};
  keymap.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      map[str[i]] = Math.min(map[str[i]] ?? Infinity, i + 1);
    }
  });
  
  return targets.map(str => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += map[str[i]];
    }
    return sum || -1;
  })
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])); // [9, 4]
console.log(solution(	["AA"], ["B"])); // [9, 4]
