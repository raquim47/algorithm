// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// function solution(myString, pat) {
//   let answer = 0;
//   for (let i = 0; i < myString.length; i++) {
//     let flag = true;
//     for (let j = 0; j < pat.length; j++) {
//       if (myString[i + j - 1] !== pat[j]) {
//         flag = false;
//         break;
//       }
//     }

//     if (flag) {
//       answer++;
//     }
//   }
//   return answer;
// }

function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.substring(i, i + pat.length) === pat) {
      answer++;
    }
  }
  return answer;
}

console.log(solution('banana', 'ana')); //		2
