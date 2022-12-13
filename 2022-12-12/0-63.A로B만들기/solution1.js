// https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript

// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
  let score = 0;
  // after는 찾은 요소를 지워주기 위해 배열로 바꾼다
  let afterArr = [];
  for (let i = 0; i < after.length; i++) {
    afterArr[i] = after[i];
  }
  // 같은 글자 찾기
  for (let i = 0; i < before.length; i++) {
    for (let j = 0; j < afterArr.length; j++) {
      if (before[i] === afterArr[j]) {
        score++;
        afterArr[j] = null;
        break;
      }
    }
  }
  if (score === before.length) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
