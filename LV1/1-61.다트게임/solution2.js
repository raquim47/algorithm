// https://school.programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
// 1D 2S# 10S
// 점수가 추가되는 구간 : "S", "D", "T", "*", "#"
function solution(dartResult) {
  const s = dartResult;
  let before = "";
  let currentNum = 0;
  let currentScore = 0;
  let beforeScore = 0;
  let calc = 0;
  const SDT = { S: 1, D: 2, T: 3 };
  for (let i = 0; i < s.length; i++) {
    // 숫자 10일 때
    if (before === "1" && s[i] === "0") {
      beforeScore = currentScore;
      currentNum = 10;
    } else if (Number(s[i]) > -1) {
      // 10이 아닌  숫자일 때
      // 숫자일때 : currentNum에 저장, currentScore를 beforeScore에 저장
      beforeScore = currentScore;
      currentNum = Number(s[i]);
    }

    // SDT일때 : currentNum로 점수 계산
    if (SDT[s[i]]) {
      currentScore = currentNum ** SDT[s[i]];
      calc += currentScore;
    }

    // *일때
    if (s[i] === "*") {
      calc -= currentScore + beforeScore;
      currentScore = currentScore * 2;
      beforeScore = beforeScore * 2;
      calc += currentScore + beforeScore;
    }
    // #일때
    if (s[i] === "#") {
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

    before = s[i];
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
