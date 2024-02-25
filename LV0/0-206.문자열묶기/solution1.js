// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  const hash = {};
  let max = 0;
  for (let i = 0; i < strArr.length; i++) {
    if(hash[strArr[i].length]){
      hash[strArr[i].length] = hash[strArr[i].length] + 1;
    } else {
      hash[strArr[i].length] = 1;
    }

    if(max < hash[strArr[i].length]){
      max = hash[strArr[i].length];
    }
  }
  return max;
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])); // 2
