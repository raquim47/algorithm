// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  
  // ["aya", "yee", "u", "maa"]
  
  for (let i = 0; i < babbling.length; i++) {
    let temp = "";
    let before = "";
    let match = false;

    for (let j = 0; j < babbling[i].length; j++) {
      temp += babbling[i][j];
      match = false;
      // console.log("temp", temp, "letter", babbling[i][j])

      for (let k = 0; k < word.length; k++) {
        // console.log("temp", temp)
        if(before === temp){
          break;
        }

        if (temp === word[k]) {
          match = true;
          before = temp;
          temp = "";
        }
      }

      // console.log("end" , temp, match)
    }

    if(match){
      answer += 1;
    }
  }

  return answer;
}

// console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
