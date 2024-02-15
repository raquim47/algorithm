// https://school.programmers.co.kr/learn/courses/30/lessons/181911

const helper = (str, arr) => {
  return str.slice(arr[0], arr[1] + 1);
};

function solution(my_strings, parts) {
  return my_strings.map((v, i) => helper(v, parts[i])).join('');
}

console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
); // 		"programmers"
