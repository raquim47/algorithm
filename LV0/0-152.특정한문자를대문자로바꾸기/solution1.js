// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// function solution(my_string, alp) {
//   let answer = '';
//   for (const v of my_string) {
//     if (v === alp) {
//       answer += alp.toUpperCase();
//     } else {
//       answer += v;
//     }
//   }
//   return answer;
// }

const solution = (my_string, alp) =>
  my_string.replaceAll(alp, alp.toUpperCase());
  
console.log(solution('programmers', 'p')); // "Programmers"
