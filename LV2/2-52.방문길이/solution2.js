// https://school.programmers.co.kr/learn/courses/30/lessons/49994

// 반대 방향을 생각하지 못함.
// console.log(solution('LRLRLRLR')); // 1

function moveCoord(current, direction) {
  const newCurrent = [...current];
  switch (direction) {
    case 'U':
      newCurrent[0] = current[0] + 1;
      break;
    case 'D':
      newCurrent[0] = current[0] - 1;
      break;
    case 'L':
      newCurrent[1] = current[1] - 1;
      break;
    case 'R':
      newCurrent[1] = current[1] + 1;
  }

  if (Math.abs(newCurrent[0]) > 5 || Math.abs(newCurrent[1]) > 5) {
    return current;
  }

  return newCurrent;
}

function solution(dirs) {
  const visited = new Map();
  let current = [0, 0];

  for (const dir of dirs) {
    const newCurrent = moveCoord(current, dir);
    const currentStr = current.join('');
    const newCurrentStr = newCurrent.join('');

    if (currentStr === newCurrentStr) continue;

    const path = currentStr + newCurrentStr;
    const reversePath = newCurrentStr + currentStr;

    if (!visited.has(path) && !visited.has(reversePath)) {
      visited.set(path, true);
      visited.set(reversePath, true);
    }
    current = newCurrent;
  }
  return visited.size / 2;
}

console.log(solution('LRLRLRLR')); // 7
