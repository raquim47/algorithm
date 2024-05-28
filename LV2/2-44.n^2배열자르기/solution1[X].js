// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const arr = Array(n)
    .fill()
    .map(() => Array(n).fill(null));
  const answer = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (count >= left && count <= right) {
        if (j < i + 1) {
          answer.push(i + 1);
        } else {
          answer.push(1 + j);
        }
      }

      count++;
    }
  }
  return answer;
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
