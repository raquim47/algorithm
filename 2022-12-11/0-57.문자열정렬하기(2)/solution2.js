// https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript

// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// "a"<"b" -> true
function solution(my_string) {
  // 배열로 바꾸기
  const str = my_string.toLowerCase();
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr[i] = str[i];
  }

  let answerArr = [];
  // 문자열 오름차순 정렬

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

console.log(solution("Bcad")); //	"abcd"
console.log(solution("heLLo")); //	"ehllo"
console.log(solution("Python")); //	"hnopty"
