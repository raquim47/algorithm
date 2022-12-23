// https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript

function solution(s) {
  let sArr = [];

  for (let i = 0; i < s.length; i++) {
    sArr[i] = s[i];
  }

  let answer = "";

  for (let i = 0; i < sArr.length; i++) {
    let min = "A";

    for (let j = 0; j < sArr.length; j++) {
      if (min <= sArr[j]) {
        min = sArr[j];
      }
    }

    answer += min;
    
    for (let j = 0; j < sArr.length; j++) {
      if (min === sArr[j]) {
        sArr[j] = 0;
        break;
      }
    }

  }

  return answer;
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
