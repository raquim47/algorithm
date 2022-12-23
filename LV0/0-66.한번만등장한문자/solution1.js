// https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript

// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  //정렬을 위해 배열에 저장
  let strArr = [];
  let strArrI = 0;
  // 한글자씩만 남기기
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
    if (count === 1) {
      strArr[strArrI] = s[i];
      strArrI++
    }
  }

  let answerArr = [];
  // 가장 작은 글자
  let minStr = "z";

  // 글자길이만큼 반복
  for (let i = 0; i < strArr.length; i++) {
    // 가장 작은 글자 찾기
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j] !== null && strArr[j] < minStr) {
        minStr = strArr[j];
      }
    }
    // answerArr에 추가
    answerArr[i] = minStr;

    // 찾은 글자 배열에서 지우기
    for (let j = 0; j < strArr.length; j++) {
      if (minStr === strArr[j]) {
        strArr[j] = null;
        break;
      }
    }
    // 작은 글자 초기화
    minStr = "z";
  }
  // 문자열로 바꿔서 반환
  let answer = "";
  for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i];
  }
  return answer;
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); //"eho"
