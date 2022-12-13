// https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript

// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = [];
  let answerIndex = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer[answerIndex] = i;
      answerIndex++;
    }
  }
  return answer;
}

console.log(solution(24)); //	[1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); //	[1, 29]
