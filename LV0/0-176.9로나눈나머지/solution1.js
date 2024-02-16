// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  return number.split('').reduce((p, c) => +p + +c) % 9;
}

console.log(solution('78720646226947352489')); //		2
