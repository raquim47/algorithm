// https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript

function solution(quiz) {
  let answerArr = [];
  for (let i = 0; i < quiz.length; i++) {
    const quizArr = quiz[i].split(" ");
    let calc = 0;
    let operator = "+";
    let res;
    for (let j = 0; j < quizArr.length; j++) {
      if (quizArr[j] === "=") {
        if (calc === parseInt(quizArr[j + 1])) {
          res = "O";
        } else {
          res = "X";
        }
        break;
      }
      if (quizArr[j] === "+" || quizArr[j] === "-") {
        operator = quizArr[j];
      } else {
        if (operator === "+") {
          calc += parseInt(quizArr[j]);
        } else if (operator === "-") {
          calc -= parseInt(quizArr[j]);
        }
      }
    }
    answerArr[i] = res;
  }
  return answerArr;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); //	["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); //	["O", "O", "X", "O"]
