// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  let even = '';
  let odd = '';
  num_list.forEach((v) => (v % 2 === 0 ? (even += v) : (odd += v)));

  return +even + +odd;
}

console.log(solution([5, 7, 8, 3])); // 581
