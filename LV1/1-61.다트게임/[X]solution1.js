// https://school.programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

// 점수가 추가되는 구간 : "S", "D", "T", "*", "#"
function solution(dartResult) {
  const str = (dartResult += "0");
  let before = "";
  let currentNum = 0;
  let currentScore = 0;
  let beforeScore = 0;
  let calc = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "S") {
      currentScore = currentNum;
    }

    if (str[i] === "D") {
      currentScore = currentNum ** 2;
    }

    if (str[i] === "T") {
      currentScore = currentNum ** 3;
    }

    if (Number(str[i]) > -1) {
      beforeScore = currentScore;
      if(Number(before) > -1){
        currentNum = 10;
      } else {
        currentNum = Number(str[i]);
      }
    } else if (str[i] === "*") {
      calc -= currentScore + beforeScore;
      currentScore = currentScore * 2;
      beforeScore = beforeScore * 2;
      calc += currentScore + beforeScore;
    } else if (str[i] === "#") {
      if (before === "*") {
        calc -= (currentScore + beforeScore) * 2;
      } else {
        calc -= currentScore * 2;
      }
    } else {
      calc += currentScore;
    }

    // console.log(
    //   "calc",
    //   calc,
    //   "currentNum",
    //   currentNum,
    //   "currentScore",
    //   currentScore,
    //   "beforeScore",
    //   beforeScore
    // );

    before = dartResult[i];
  }
  return calc;
}

// console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); //	9
// console.log(solution("1D2S0T")); // 3
// console.log(solution("1S*2T*3S")); //	23
// console.log(solution("1D#2S*3S")); //	5
// console.log(solution("1T2D3D#")); //-4
// console.log(solution("1D2S3T*")); //5
