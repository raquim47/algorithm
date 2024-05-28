// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = 0;

  const map = {};
  for (let i = 0; i < skill.length; i++) {
    map[skill[i]] = i;
  }

  for (const candidate of skill_trees) {
    let skillIdx = 0;
    let isValid = true;

    for (let i = 0; i < candidate.length; i++) {
      if (map[candidate[i]] !== undefined) {
        if (map[candidate[i]] > skillIdx) {
          isValid = false;
          break;
        }
        skillIdx++;
      }
    }

    if (isValid) {
      answer++;
    }
  }

  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2
