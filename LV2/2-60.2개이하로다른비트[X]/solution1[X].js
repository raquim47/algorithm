// https://school.programmers.co.kr/learn/courses/30/lessons/77885
function countDiff(x, y) {
  let diff = x ^ y;
  let count = 0;

  while (diff > 0) {
    if (diff % 2 === 1) {
      count++;
    }
    diff = diff >> 1;
  }
  return count;
}

function solution(numbers) {
  const results = numbers.map((x) => {
    let next = x + 1;
    while (true) {
      let diff = countDiff(x, next);
      if (diff === 1 || diff === 2) {
        return next;
      }
      next++;
    }
  });
  return results;
}

console.log(solution([2, 7])); // 	[3,11]
