// https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript

// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  const str = num + "";
  let answer;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == k) {
      answer = i + 1;
      break;
    }
  }
  if (answer) {
    return answer;
  } else {
    return -1;
  }
}

console.log(solution(29183, 1)); // 	3
console.log(solution(232443, 4)); // 	4
console.log(solution(123456, 7)); // -1
