// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  if(is_prefix.length > my_string.length) return 0;
  for (let i = 0; i < is_prefix.length; i++) {
    if(my_string[i] !== is_prefix[i]){
      return 0;
    }
  }
  return 1;
}

// function solution(my_string, is_prefix) {
//     return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
// }
console.log(solution('banana', 'bananan')); // 0
