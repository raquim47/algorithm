// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  const hash = {};
  let max = 0;

  strArr.forEach(str => {
    const len = str.length;
    hash[len] = (hash[len] || 0) + 1;
    max = Math.max(max, hash[len]);
  });

  return max;
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])); // 2
