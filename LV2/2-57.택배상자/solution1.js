// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  let current = 0;
  const sub = [];

  for (let i = 1; i <= order.length + 1; i++) {
    while (sub.length > 0 && order[current] === sub[sub.length - 1]) {
      sub.pop();
      current++;
    }

    if (order[current] === i) {
      current++;
    } else {
      sub.push(i);
    }
  }
  // while (sub.length > 0 && order[current] === sub[sub.length - 1]) {
  //   sub.pop();
  //   current++;
  // }

  return sub;
}
// console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5
