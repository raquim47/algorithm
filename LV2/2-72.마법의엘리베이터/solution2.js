// https://school.programmers.co.kr/learn/courses/30/lessons/77485

function solution(storey) {
  let answer = 0;
  let carryOver = 0;
  const strStorey = storey.toString();

  for (let i = strStorey.length - 1; i >= 0; i--) {
    let digit = parseInt(strStorey[i]) + carryOver;

    // digit이 10 이상일 경우,
    // carryOver가 이미 설정되어 있으므로 추가 작업 없이 continue
    if (digit >= 10) continue;

    if (digit > 5 || (digit === 5 && strStorey[i - 1] >= 5)) {
      // 만약 다음 자리수가 5 이상이면, 현재 자릿수를 5에서 10으로 끌어올려 다음 자리로 1을 올리는 것이 최소 버튼 사용을 보장할 수 있습니다.
      answer += 10 - digit;
      carryOver = 1;
    } else {
      answer += digit; // 5 이하인 경우 직접 더하기
      carryOver = 0;
    }
  }

  return answer + carryOver;
}

console.log(solution(16)); // 6
// console.log(solution(485)); // 2
