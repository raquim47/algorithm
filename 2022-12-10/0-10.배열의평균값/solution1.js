// https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript

function solution(numbers) {
  let added = 0;
  for(let i = 0; i < numbers.length; i++){
    added = added + numbers[i];
  }
  return added / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0
