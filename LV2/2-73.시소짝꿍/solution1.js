// https://school.programmers.co.kr/learn/courses/30/lessons/152996

// 2m, 3m, 4m
// 180x4 === 360x2

function solution(weights) {
  const sortedList = weights.sort((a, b) => a - b);
  let totalCount = 0;
  let beforeCount = 0;

  for (let i = 0; i < sortedList.length; i++) {
    let count = 0;
    const candidate = sortedList[i];

    if (sortedList[i - 1] === candidate) {
      totalCount += beforeCount - 1;
      beforeCount--;
      continue
    }

    for (let j = i + 1; j < sortedList.length; j++) {
      const target = sortedList[j];
      if (
        candidate === target ||
        candidate * 2 === target ||
        candidate * 3 === target * 2 ||
        candidate * 4 === target * 3
      ) {
        count++;
        continue;
      }
    }
    totalCount += count;
    beforeCount = count;
  }
  return totalCount;
}

console.log(solution([100, 180, 360, 100, 270])); // 4
// 100 100 180 270 360
