// https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  const list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = ""
  let word = "";

  for (let i = 0; i < s.length; i++) {

    if(Number(s[i]) > -1){
      // 숫자
      answer += s[i];

    } else {
      // 문자
      let isNum = false;

      word += s[i];
      for (let j = 0; j < list.length; j++) {
        if(word === list[j]){
          word = j + ""
          isNum = true;
          break;
        }
      }

      if(isNum){
        answer += word;
        word = "";
      }

    }
  }

  return Number(answer);
}

// console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
// console.log(solution("2three45sixseven")); // 234567
// console.log(solution("123")); // 123
