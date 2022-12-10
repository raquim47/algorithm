// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript

// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let arr = [];
  for (let i = 0; i < num_list.length; i++) {
    arr.push(num_list[num_list.length - (i + 1)]);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); //[5, 3, 1, 1, 1, 0, 1]
