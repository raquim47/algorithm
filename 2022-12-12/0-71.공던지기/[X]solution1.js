// https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript

function solution(numbers, k) {
  if (numbers.length % 2 === 0) {
    return 2 * k - 1;
  } else if (numbers.length % 2 === 1) {

    if (k <= (numbers.length + 1) / 2) {
      return 2 * k - 1;
    } else if (k > (numbers.length + 1) / 2) {
      return (k - (numbers.length + 1) / 2) * 2;
    }

  }
}

console.log(solution([1, 2, 3, 4])); //2	3
console.log(solution([1, 2, 3, 4, 5, 6])); //5	3
console.log(solution([1, 2, 3])); //3	2
