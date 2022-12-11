// https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript

// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer[(i - 1) / 2] = i;
  }
  return answer;
}

console.log(solution(10)); //	[1, 3, 5, 7, 9]
console.log(solution(15)); //	[1, 3, 5, 7, 9, 11, 13, 15]
