// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
  if (is_suffix.length > my_string.length) return 0;
  for (let i = 0; i < is_suffix.length; i++) {
    if (is_suffix[is_suffix.length - 1 - i] !== my_string[my_string.length - 1 - i]) {
      return 0;
    }
  }

  return 1;
}

console.log(solution(['banana', 'abanana'])); // 0
