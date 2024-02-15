// https://school.programmers.co.kr/learn/courses/30/lessons/181841

// function solution(str_list, ex) {
//   let answer = '';
//   for (let i = 0; i < str_list.length; i++) {
//     if(!str_list[i].includes(ex)){
//       answer += str_list[i];
//     }
//   }
//   return answer;
// }

function solution(str_list, ex) {
  return str_list.filter((v) => !v.includes(ex)).join('');
}

console.log(solution(['abc', 'def', 'ghi'], 'ef')); // 	"abcghi"
