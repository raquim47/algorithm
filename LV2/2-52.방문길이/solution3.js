// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function moveCharacter(current, direction) {
  let { x, y } = current;
  switch (direction) {
    case 'U':
      if (y < 5) y += 1;
      break;
    case 'D':
      if (y > -5) y -= 1;
      break;
    case 'L':
      if (x > -5) x -= 1;
      break;
    case 'R':
      if (x < 5) x += 1;
      break;
  }
  return { x, y };
}

function createPathKey(a, b) {
  return a.x === b.x ?
    a.y < b.y ? `${a.x},${a.y}:${b.x},${b.y}` : `${a.x},${b.y}:${b.x},${a.y}` :
    a.x < b.x ? `${a.x},${a.y}:${b.x},${b.y}` : `${b.x},${b.y}:${a.x},${a.y}`;
}

function solution(dirs) {
  const visited = new Set();
  let current = { x: 0, y: 0 };

  for (const dir of dirs) {
    const next = moveCharacter(current, dir);
    if (next.x !== current.x || next.y !== current.y) {
      const pathKey = createPathKey(current, next);
      console.log(pathKey)
      visited.add(pathKey);
      current = next;
    }
  }
  
  return visited.size;
}

console.log(solution("ULURRDLLU")); // 7