// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
  return strArr.filter((v) => !v.includes('ad'));
}

console.log(solution(['and', 'notad', 'abcd'])); // 	["and","abcd"]
