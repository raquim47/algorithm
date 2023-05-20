// 나이브 문자열 검색

// 의사 코드
// 1. 긴 문자열의 각 문자를 반복, 내부에서 짧은 문자열을 반복
// 2. 문자가 일치하지 않으면 내부 루프를 중단
// 3. 문자가 일치하면 짧은 문자열의 다음 문자로 넘어가고 짧은 문자열의 끝에 도달할 때까지 반복.naviveStringSearch
// 4. 짧은 문자열의 끝에 도달하면 count 증가
// 5. 마지막에 count를 반환
function naviveStringSearch(longStr, word) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (longStr[i + j] !== word[j]) break;

      if (j === word.length - 1) count++;
    }
  }
  return count;
}
console.log(naviveStringSearch('omg', 'omg'));
