// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
  let front = '';
  let middle = '';
  let end = '';
  for (let i = 0; i < my_string.length; i++) {
    if (i < s) {
      front += my_string[i];
    } else if (i > e) {
      end += my_string[i];
    } else {
      middle = my_string[i] + middle;
    }
  }
  return front + middle + end;
}

console.log(solution('Progra21Sremm3', 6, 12)); // 	"ProgrammerS123"