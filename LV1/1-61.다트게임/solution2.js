// https://school.programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

// 점수가 추가되는 구간 : "S", "D", "T", "*", "#"
function solution(dartResult) {
  let before = "";
  let currentNum = 0;
  let currentScore = 0;
  let beforeScore = 0;
  let calc = 0;
  
  for (let i = 0; i < dartResult.length; i++) {
    if (Number(dartResult[i]) > -1) {
      // 숫자일때 : currentNum에 저장, currentScore를 beforeScore에 저장
      beforeScore = currentScore;
      if (before !== "" && Number(before) > -1) {
        // console.log("before", before, "dartResult[i]", dartResult[i]);
        currentNum = 10;
      } else {
        currentNum = Number(dartResult[i]);
      }
    } else if (
      // SDT일때 : currentNum로 점수 계산
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      if (dartResult[i] === "S") {
        currentScore = currentNum;
      }
      if (dartResult[i] === "D") {
        currentScore = currentNum ** 2;
      }
      if (dartResult[i] === "T") {
        currentScore = currentNum ** 3;
      }

      calc += currentScore;
    } else if (
      // *#일때
      dartResult[i] === "*" ||
      dartResult[i] === "#"
    ) {
      if (dartResult[i] === "*") {
        calc -= currentScore + beforeScore;
        currentScore = currentScore * 2;
        beforeScore = beforeScore * 2;
        calc += currentScore + beforeScore;
      }

      if (dartResult[i] === "#") {
        if (before === "*") {
          calc -= currentScore + beforeScore;
          currentScore = currentScore * -1;
          beforeScore = beforeScore * -1;
          calc += currentScore + beforeScore;
        } else {
          calc -= currentScore;
          currentScore = currentScore * -1;
          calc += currentScore;
        }
      }
    }
    before = dartResult[i];
  }

  return calc;
}

// console.log(solution("1S2D*3T")); // 37
// console.log(solution("1D2S#10S")); //	9
// console.log(solution("1D2S0T")); // 3
// console.log(solution("1S*2T*3S")); //	23
// console.log(solution("1D#2S*3S")); //	5
// console.log(solution("1T2D3D#")); //-4
// console.log(solution("1D2S3T*")); //5