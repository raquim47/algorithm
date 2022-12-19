// https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function sub(value){
  const list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let j = 0; j < list.length; j++) {
    if(value === list[j]){
      return j + ""
    }
  }
}

function solution(s) {
  let answer = ""
  let word = "";

  for (let i = 0; i < s.length; i++) {

    if(Number(s[i]) > -1){
      answer += s[i];
    } else {
      word += s[i];
      
      if(sub(word)){
        answer += sub(word);
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
