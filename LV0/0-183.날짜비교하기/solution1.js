// https://school.programmers.co.kr/learn/courses/30/lessons/181838

// function solution(date1, date2) {
//   for (let i = 0; i < date1.length; i++) {
//     if (date1[i] > date2[i]) {
//       return 0;
//     } else if (date1[i] < date2[i]) {
//       return 1;
//     }
//   }
//   return 0;
// }

function solution(date1, date2) {
  return +(new Date(date1) < new Date(date2))
}

console.log(solution([1024, 10, 24], [1024, 10, 24])); // 	0
