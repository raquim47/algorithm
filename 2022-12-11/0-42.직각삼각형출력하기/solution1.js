// https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= input[0]; i++) {
      let star = "";
      for(let j = 1; j <= i; j++){
          star += "*";
      } 
      console.log(star)
  };
});

// 입력값 3

// 결과 
// *
// **
// ***