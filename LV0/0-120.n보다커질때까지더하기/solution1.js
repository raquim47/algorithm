// https://school.programmers.co.kr/learn/courses/30/lessons/181884

// function solution(numbers, n) {
//   let answer = 0;
//   for (const num of numbers) {
//     if (answer <= n) {
//       answer += num;
//     } else {
//       return answer;
//     }
//   }
//   return answer;
// }

function solution(numbers, n) {
  return numbers.reduce((prev, num) => (prev <= n ? prev + num : prev), 0);
}

console.log(solution([58, 44, 27, 10, 100], 139)); // 239
