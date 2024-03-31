// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let curr = section[0];
  let count = 0;
  while (curr <= section[section.length - 1]) {
    if (section.includes(curr)) {
      curr += m;
      count++;
    } else {
      curr++;
    }
  }
  return count;
}

// console.log(solution(8, 4, [2, 3, 6])); // 	2
// console.log(solution(5, 4, [1, 3])); // 		1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
