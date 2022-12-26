// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

// 유형 문자열로 출력하기
function setResultType(score) {
  // 검사할 순서
  const typeOrder = ["RT", "CF", "JM", "AN"];

  result = "";
  // score 객체를 토대로 해당 유형의 값을 비교해 새 문자열에 담는다.
  // 두 가지를 비교해서 점수가 높은 유형의 값을 담고 
  // 점수가 같으면 앞에 있는 유형을 담는다.
  for (let i = 0; i < typeOrder.length; i++) {
    const [type1, type2] = typeOrder[i];
    if (score[type1] < score[type2]) {
      result += type2;
    } else {
      result += type1;
    }
  }

  return result;
}

// 점수 obj 만들기
function setScore(Q, answer) {
  const score = {
    R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0,
  };
  // 질문 배열 for문 돌면서 type1, type2에 문자열에 앞뒤 타입 담아주고
  // 4보다 작으면 type1(앞)에 4 - 답변점수 값을 더함
  // 4보다 크면 type2(뒤)에 답변점수 - 4 값을 더함.
  for (let i = 0; i < Q.length; i++) {
    const [type1, type2] = Q[i]; // split("")을 안해도 됌!

    if (answer[i] < 4) {
      score[type1] += 4 - answer[i];
    } else if (answer[i] > 4) {
      score[type2] += answer[i] - 4;
    }
  }

  return score;
}

function solution(survey, choices) {
  const score = setScore(survey, choices);
  return setResultType(score);
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
