// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  // str2.length 3
  for (let i = 0; i < str1.length; i++) {
    let word = "";
    for (let j = 0; j < str2.length; j++) {
      word += str1[i + j];
    }
    if (word === str2) {
      return 1;
    }
  }
  return 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
