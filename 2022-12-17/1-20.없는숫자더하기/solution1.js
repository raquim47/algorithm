// https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution(numbers) {
  let calc = 0;

  for (let i = 0; i <= 9; i++) {
    let check = true;

    for (let j = 0; j < numbers.length; j++) {
      if (i === numbers[j]) {
        check = false;
        break;
      }
    }

    if (check) {
      calc += i;
    }
  }

  return calc;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); //	6
