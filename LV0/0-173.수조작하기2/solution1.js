// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
  const numMap = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };
  let answer = '';
  for (let i = 0; i < numLog.length - 1; i++) {
    answer += numMap[numLog[i + 1] - numLog[i]];
  }
  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
('wsdawsdassw');
