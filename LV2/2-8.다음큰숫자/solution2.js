// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function count1Frombinary(n) {
  return n
    .toString(2)
    .split('')
    .reduce((acc, x) => acc + +x, 0);
}

function solution(n) {
  let answer = n + 1;
  const target = count1Frombinary(n);

  while (target !== count1Frombinary(answer)) {
    answer++;
  }
  return answer;
}

console.log(solution(78)); // 83
