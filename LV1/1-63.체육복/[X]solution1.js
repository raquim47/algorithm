// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  const min = n - lost.length;
  let save = 0;
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (reserve[j] - 1 === lost[0] || reserve[j] + 1 === lost[0]) {
        reserve[j] = -1;
        save += 1;
        break;
      }
    }
  }
  return min + save;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
