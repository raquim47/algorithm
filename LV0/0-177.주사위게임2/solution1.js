// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  const result = (n) => a ** n + b ** n + c ** n;
  if (a === b && b === c) {
    return result(1) * result(2) * result(3);
  } else if (a !== b && b !== c && a !== c) {
    return result(1);
  } else {
    return result(1) * result(2);
  }
}

console.log(solution(4, 4, 4)); //	110592
