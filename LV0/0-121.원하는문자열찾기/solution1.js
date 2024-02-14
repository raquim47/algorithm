// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// function solution(myString, pat) {
//   return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
// }
function solution(myString, pat) {
  return +myString.toUpperCase().includes(pat.toUpperCase());
}

console.log(solution('AbCdEfG', 'aBc')); // 1
