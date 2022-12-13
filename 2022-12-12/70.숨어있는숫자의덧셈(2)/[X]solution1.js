// https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript

// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  var answerArr = [];
  let num = "";
  for (let i = 0; i < my_string.length; i++) {
    if (parseInt(my_string[i]) > -1) {
      num += my_string[i];
    } else if (num) {
      answerArr.push(num);
      num = "";
    }
  }
  let answer = 0;
  for(let i = 0; i < answerArr.length; i++){
    answer += parseInt(answerArr[i]);
  }
  return answer;
}

console.log(solution("aAb1B2cC34oOp")); //	37
console.log(solution("1a2b3c4d123Z")); //133
