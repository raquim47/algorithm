// https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript

function solution(numbers) {
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = "";
  let word = ""
  for (let i = 0; i < numbers.length; i++) {
    word += numbers[i];
    for(let j = 0; j<num.length; j++){
      if(word === num[j]){
        answer += j;
        word = "";
      }
    }
  }
  return parseInt(answer);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); //	123456789
console.log(solution("onefourzerosixseven")); //	14067
