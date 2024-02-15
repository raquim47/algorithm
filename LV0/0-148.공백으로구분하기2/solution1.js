// https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string) {
  return my_string.split(' ').filter(v => v);
}

console.log(solution('    programmers  ')); // ["programmers"]
