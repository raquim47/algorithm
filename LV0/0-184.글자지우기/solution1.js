// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  return [...my_string].filter((v, i) => !indices.includes(i) ? v : '').join('');
}

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 	"programmers"
