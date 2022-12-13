// https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript

function solution(numbers) {
  var arr = numbers;
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  num.forEach((a, i) => {
      while(arr.includes(a)){
          arr = arr.replace(a, i);
      }
  })
  return parseInt(arr);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); //	123456789
console.log(solution("onefourzerosixseven")); //	14067
