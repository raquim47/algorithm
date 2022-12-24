// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function solution(X, Y) {
  let YArr = Y.slice().split("");
  let arr = [];
  
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < YArr.length; j++) {
      if (X[i] === YArr[j]) {
        arr.push(X[i]);
        YArr[j] = "";
        break;
      }
    }
  }
  
  const answer = arr.slice().sort((a,b) => b - a).join("");
  return answer ? answer : -1;
}

console.log(solution("100", "2345")); //	"-1"
// console.log(solution("100", "203045")); //"0"
// console.log(solution("100", "123450")); //	"10"
// console.log(solution("12321", "42531")); //"321"
// console.log(solution("5525", "1255")); //"552"
