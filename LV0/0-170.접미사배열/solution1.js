// https://school.programmers.co.kr/learn/courses/30/lessons/181909

// function solution(my_string) {
//   const answer = [];
//   for (let i = 0; i < my_string.length; i++) {
//     answer.push(my_string.slice(i));
//   }
//   return answer.sort();
// }

function solution(my_string) {
  // Array.from(my_string)
  return my_string
    .split('')
    .map((_, i) => my_string.substring(i)) // slice
    .sort();
}
console.log(solution('banana')); //	["a", "ana", "anana", "banana", "na", "nana"]
