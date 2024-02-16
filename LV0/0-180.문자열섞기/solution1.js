// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  let answer = '';
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
}

console.log(solution('aaaaa', 'bbbbb')); //	"ababababab"
