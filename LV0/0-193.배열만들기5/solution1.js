// https://school.programmers.co.kr/learn/courses/30/lessons/181912

// function solution(intStrs, k, s, l) {
//   const answer = [];
//   for (let i = 0; i < intStrs.length; i++) {
//     if (intStrs[i].substring(s, s + l) > k) {
//       answer.push(+intStrs[i].substring(s, s + l));
//     }
//   }
//   return answer;
// }

function solution(intStrs, k, s, l) {
  return intStrs.reduce(
    (acc, cur) =>
      cur.substring(s, s + l) > k ? [...acc, +cur.substring(s, s + l)] : acc,
    []
  );
}
console.log(
  solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5)
); //[56789, 99999]
