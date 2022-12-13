// https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript

// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let strArr = [];
  for (let i = 0; i < my_string.length; i++) {
    strArr[i] = my_string[i];
  }
  let answerArr = [""];
  let answerArrIndex = 0;
  let confirm = true;
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < answerArr.length; j++) {
      if (strArr[i] === answerArr[j]) {
        confirm = false;
      }
    }
    if (confirm === true) {
      answerArr[answerArrIndex] = strArr[i];
      answerArrIndex++;
    }
    confirm = true;
  }
  let answer = "";
  for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i];
  }
  return answer;
}

console.log(solution("people")); //	"peol"
console.log(solution("We are the world")); //	"We arthwold"
