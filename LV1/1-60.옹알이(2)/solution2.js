// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function isMatchWord(word) {
  const wordList = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < wordList.length; i++) {
    if (word === wordList[i]) {
      return true;
    }
  }
  return false;
}

function checkWord(str) {
  let checkingWord = "";
  let checkedWord = "";
  let isAllMatch = false;

  for (let i = 0; i < str.length; i++) {
    isAllMatch = false;
    checkingWord += str[i];

    if (checkedWord === checkingWord) {
      return false;
    }

    if (isMatchWord(checkingWord)) {
      checkedWord = checkingWord;
      checkingWord = "";
      isAllMatch = true;
    }
    
    // console.log(str[i], isAllMatch)

  }
  return isAllMatch;
}
// 배열의 단어들을 하나씩 읽는다
// 단어를 한글자씩 꺼내서 checkingWord에 담는다.
// checkingWord이 발음가능한 단어'와 맞는지 확인한다.
// 맞으면 checkedWord에 담고 checkingWord을 비운다. isAllMatch 상태를 true로 바꾼다.
// (연속되면 안되기 때문에) checkedWord === checkingWord면 false를 반환하면서 반복을 끝낸다.
// 문자열을 다 담았을때 true면 anwwer에 +1을 한다
function solution(babbling) {
  let answer = 0;

  // 단어가 맞으면 answer += 1
  for (let i = 0; i < babbling.length; i++) {
    if (checkWord(babbling[i])) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
