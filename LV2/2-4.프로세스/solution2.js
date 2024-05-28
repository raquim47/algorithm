// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
  const list = priorities.map((priority, index) => ({ index, priority }));

  let count = 0;

  while (list.length > 0) {
    const dequeued = list.shift();
    const hasHighPriority = list.some((el) => el.priority > dequeued.priority);
    if (hasHighPriority) {
      list.push(dequeued);
    } else {
      count++;
      if (dequeued.index === location) return count;
    }
  }
  return count;
}

console.log(solution([2, 1, 3, 2], 2)); //	1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 	5
