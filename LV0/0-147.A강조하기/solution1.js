// https://school.programmers.co.kr/learn/courses/30/lessons/181874

// function solution(myString) {
//   let answer = '';
//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === 'a' || myString[i] === 'A') {
//       answer += 'A';
//     } else {
//       answer += myString[i].toLowerCase();
//     }
//   }
//   return answer;
// }

const solution = (my_string) => my_string.toLowerCase().replaceAll('a', 'A');
console.log(solution('PrOgRaMmErS')); // 	"progrAmmers"
