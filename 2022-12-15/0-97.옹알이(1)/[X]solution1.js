// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

// 1번씩만
function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];

  // 1번씩만 사용한 단어 만들기
  let combi = [];
  combiI = 0;

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] !== word[j]) {
        combi[combiI] = word[i] + word[j];
        combiI++;
      }
    }
  }
  // 원래 단어 추가
  combi = [...word, ...combi];
  return combi
  // 비교하기
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < combi.length; j++) {
      if (babbling[i] === combi[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// console.log(solution(["ayaye", "wo"])); // 1

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
