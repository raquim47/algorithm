// https://school.programmers.co.kr/learn/courses/30/lessons/181940

function solution(my_string, k) {
  let answer = '';
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}
// const solution = (my_string, k) => my_string.repeat(k);
console.log(solution('love', 10)); // "lovelovelovelovelovelovelovelovelovelove"
