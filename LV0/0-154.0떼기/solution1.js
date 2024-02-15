// https://school.programmers.co.kr/learn/courses/30/lessons/181847

function solution(n_str) {
  if (n_str[0] !== "0") return n_str;
  let answer = '';
  let flag = true;

  for (let i = 0; i < n_str.length; i++) {
    if (flag) {
      if (n_str[i + 1] !== "0") {
        flag = false;
      }
    } else {
      answer += n_str[i];
    }
  }
  return answer;
}

// const solution = (str) => String(Number(str))

console.log(solution('0010')); // 	"10"
// console.log(solution('854020')); // 	"854020"
