// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  const map = new Map();

  for (const [a, b] of wires) {
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a).push(b);
    map.get(b).push(a);
  }
  let minDiff = Infinity;

  for (const [a, b] of wires) {
    const visited = new Set([b]);
    const queue = [a];
    let count = 0;

    while (queue.length) {
      let node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        count++;
        map.get(node).forEach((neighbor) => {
          if (neighbor !== b && !visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }

    const diff = Math.abs(n - 2 * count);
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
