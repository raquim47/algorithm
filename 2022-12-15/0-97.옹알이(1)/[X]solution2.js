// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

// 1번씩만
function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  // 먼저 첫글자가 맞는지 확인
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    let sample = "";
    let correct = false;
    for (let j = 0; j < word.length; j++) {
      // babbling[i] : "ayaye" , word[j]: "aya"
      for (let k = 0; k < word[j].length; k++) {
        sample += babbling[i][k];
      }
      if(sample === word[j]){
        break;
      } else {
      }
      sample = ""


    }
    return sample
  }
}

// console.log(solution(["ayaye", "wo"])); // 1

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
