// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skills, skill_trees) {
  let answer = 0;
  const map = new Map();

  for (let i = 0; i < skills.length; i++) {
    map.set(skills[i], i);
  }

  for (const tree of skill_trees) {
    let idx = 0;
    let isValid = true;
    for (const skill of tree) {
      if (map.has(skill)) {
        if (map.get(skill) === idx) {
          idx++;
        } else {
          isValid = false;
          break;
        }
      }
    }

    if(isValid) answer++
  }
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2
