// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const hash = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sortedEntries = Object.values(hash).sort((a, b) => b - a);

  let count = 0;
  let sum = 0;

  for (const value of sortedEntries) {
    sum += value;
    count++;
    if (sum >= k) break;
  }
  return count;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
