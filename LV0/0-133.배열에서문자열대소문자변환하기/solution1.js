// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr) {
  let isOdd = true;
  return strArr.map((v) => {
    isOdd = !isOdd;
    return isOdd ? v.toUpperCase() : v.toLowerCase();
  });
}

// function solution(strArr) {
// return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
// }

console.log(solution(['aBc', 'AbC'])); // ["abc","ABC"]