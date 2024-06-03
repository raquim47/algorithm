// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let number = 0;
  let count = 0;
  let answer = '';
  let turnNumber = 1;

  while (true) {
    const converted = number.toString(n).toUpperCase();

    for (let i = 0; i < converted.length; i++) {
      if (turnNumber === p) {
        answer += converted[i];
        count++;
      }

      if (count === t) {
        console.log(number, count, answer, turnNumber);
        return answer;
      }

      turnNumber = turnNumber === m ? 1 : turnNumber + 1;
    }

    number++;
  }
}

console.log(solution(2, 4, 2, 1)); // "0111"
