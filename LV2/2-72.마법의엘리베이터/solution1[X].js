// https://school.programmers.co.kr/learn/courses/30/lessons/77485
// function solution(storey) {
//   let answer = 0;
//   for (const s of storey + '') {
//     answer += s <= 5 ? +s : 11 - s;
//   }
//   return answer;
// }

function solution(storey) {
  let answer = 0;
  let isPass = false;
  const s = storey + '';

  for (let i = s.length - 1; i >= 0; i--) {
    if (isPass) {
      isPass = false;
      continue;
    }
    if (s[i] <= 5) {
      answer += +s[i];
    } else if (s[i - 1] === '9') {
      isPass = true;
      if (!s[i - 2]) {
        answer += 11 - s[i];
      } else {
        answer += 10 - s[i];
      }
    } else {
      answer += 11 - s[i];
    }
  }

  return answer;
}
// console.log(solution(16)); // 6
console.log(solution(999)); // 6
