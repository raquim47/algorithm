// https://school.programmers.co.kr/learn/courses/30/lessons/181879

// function solution(num_list) {
//   if(num_list.length > 10){
//     return num_list.reduce((prev, curr) => prev + curr, 0)
//   } else {
//     return num_list.reduce((prev, curr) => prev * curr, 1)
//   }
// }

function solution(num_list) {
  return num_list.reduce((p,c) => num_list.length > 10 ? p + c : p * c)
}
console.log(solution([2, 3, 4, 5])); // 120
