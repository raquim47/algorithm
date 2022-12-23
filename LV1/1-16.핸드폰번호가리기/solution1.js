// https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  let arr = [];
  for (let i = 0; i < phone_number.length; i++) {
    arr[i] = phone_number[i];
  }

  for (let i = arr.length - 5; i >= 0; i--) {
    arr[i] = "*"
  }

  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i]
  }
  
  return str;
}

console.log(solution("01033334444")); //	"*******4444"
// console.log(solution("027778888")); //	"*****8888"
