// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  if (x === y) return 0;

  let queue = [[y, 0]]; // 각 요소는 [현재 값, 연산 횟수]
  let visited = new Set([y]); // 방문한 값들을 저장하는 Set

  while (queue.length > 0) {
    let [current, count] = queue.shift();
    // 가능한 모든 연산 적용
    let possibilities = [];
    if (current % 3 === 0) possibilities.push(current / 3);
    if (current % 2 === 0) possibilities.push(current / 2);
    if (current > n) possibilities.push(current - n);

    for (let next of possibilities) {
      if (next === x) {
        return count + 1; // 다음 단계에서 x에 도달하면 연산 횟수 반환
      }
      if (next > x && !visited.has(next)) {
        // x 이하로 내려가지 않도록 처리
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}

console.log(solution(20, 34, 7)); // 2
