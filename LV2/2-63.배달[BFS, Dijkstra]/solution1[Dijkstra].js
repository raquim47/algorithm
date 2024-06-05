// https://school.programmers.co.kr/learn/courses/30/lessons/12978
function solution(N, road, K) {
  const map = new Map();
  for (let i = 1; i <= N; i++) {
    map.set(i, []);
  }
  road.forEach(([a, b, c]) => {
    map.get(a).push([b, c]);
    map.get(b).push([a, c]);
  });

  const minTime = new Map();
  for (let i = 1; i <= N; i++) {
    minTime.set(i, Infinity);
  }
  minTime.set(1, 0);

  const queue = [[1, 0]];
  let count = 0;

  while (queue.length > 0) {
    const [target, accTime] = queue.shift();
    if (accTime > minTime.get(current)) continue;

    if (accTime <= K) count++;

    map.get(current).forEach(([neighbor, time]) => {
      const newAccTime = accTime + time;
      if (newAccTime < minTime.get(neighbor)) {
        minTime.set(neighbor, newAccTime);
        queue.push([neighbor, newAccTime]);
        // 새로운 경로가 큐에 추가될 때마다 정렬 (힙 구조를 사용하는 것이 더 효율적)
        queue.sort((a, b) => a[1] - b[1]);
      }
    });
  }

  let count = 0;
  minTime.forEach((time) => {
    if (time <= K) count++;
  });

  return count;
}

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 	4
