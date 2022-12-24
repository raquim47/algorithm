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

function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (checkWord(babbling[i])) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
