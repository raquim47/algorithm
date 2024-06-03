// https://school.programmers.co.kr/learn/courses/30/lessons/17687

// answer의 length를 체크하면 되니 count는 불필요

function solution(n, t, m, p) {
  let number = 0;
  let answer = '';
  let currentPlayer = 1;

  while (answer.length < t) {
    const convertedNumber = number.toString(n).toUpperCase();
    for (const digit of convertedNumber) {
      if (answer.length >= t) break;

      if (currentPlayer === p) {
        answer += digit;
      }

      currentPlayer = (currentPlayer % m) + 1;
    }

    number++;
  }
  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
