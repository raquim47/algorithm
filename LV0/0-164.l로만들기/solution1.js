// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
  let answer = '';
  for (const v of myString) {
    if (v < 'l') {
      answer += 'l';
    } else {
      answer += v;
    }
  }
  return answer;
}

console.log(solution('jjnnllkkmm')); // 	"llnnllllmm"