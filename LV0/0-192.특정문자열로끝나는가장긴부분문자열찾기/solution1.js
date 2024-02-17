// https://school.programmers.co.kr/learn/courses/30/lessons/181872

// function solution(myString, pat) {
//   let answer = '';
  
//   for (let i = myString.length - 1; i >= 0; i--) {
//     let flag = true;
//     for (let j = 0; j < pat.length; j++) {
//       if (myString[i - j] !== pat[pat.length - 1 - j]) {
//         flag = false;
//         break;
//       }
//     }

//     if (flag) {
//       return myString.substring(0, i + 1);
//     }
//   }
//   return answer;
// }

const solution = (myString, pat)  => {
  return myString.substring(0, myString.lastIndexOf(pat)) + pat;
  
}

console.log(solution('AbCdEFG', 'dE')); //	"AbCdE"
// console.log(solution("AAAAaaaa",	"a")); //		"AAAAaaaa"
