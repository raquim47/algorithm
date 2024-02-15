// https://school.programmers.co.kr/learn/courses/30/lessons/181849

// function solution(num_str) {
//   let answer = 0;
//   for (const v of num_str) {
//     answer += +v;
//   }
//   return answer;
// }

function solution(num_str) {
    return [...num_str].reduce((a, c) => a + +c, 0)
}
console.log(solution('123456789')); // 	45
