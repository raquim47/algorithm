// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
  let answer = '';
  for (let i = c - 1; i < my_string.length; i += m) {
    answer += my_string[i];
  }
  return answer;
}

console.log(solution('ihrhbakrfpndopljhygc', 4, 2)); //	"happy""
