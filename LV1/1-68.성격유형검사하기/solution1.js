// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript
// [
//   { R: 0, T: 0 },
//   { C: 0, F: 0 },
//   { J: 0, M: 0 },
//   { A: 0, N: 0 },
// ];
function solution(survey, choices) {
  const score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split("");
    // console.log(choices[i]);

    if (choices[i] < 4) {
      score[type1] += 4 - choices[i];
    } else if (choices[i] > 4) {
      score[type2] += choices[i] - 4;
    }
  }
  let answer = "";
  if (score.R < score.T) {
    answer += "T";
  } else {
    answer += "R";
  }

  if (score.C < score.F) {
    answer += "F";
  } else {
    answer += "C";
  }

  if (score.J < score.M) {
    answer += "M";
  } else {
    answer += "J";
  }

  if (score.A < score.N) {
    answer += "N";
  } else {
    answer += "A";
  }

  return answer;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"],[7, 1, 3])); // "RCJA"
