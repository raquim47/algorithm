// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

// 1번씩만
function solution(babbling) {
  const word = ["ye", "aya", "ma", "woo"];
  let count = 0; // count :최종적으로 return할 값
  
  // 1. babbling 배열 반복
  for (let i = 0; i < babbling.length; i++) {
    // "ayaye"
    const copyWord = [...word]; // word 배열 복사, babbling의 한 단어와 비교할때마다 새로운 비교 배열이 필요하다.
    let sentence = ""; // 맞는 단어의 재료를 담는 변수 : babbling[i]와 비교해서 맞으면 count++
    let sentenceI = 0; // sentence의 인덱스, compare가 맞을 때 compare.length를 더해줘서 다음 들어올 compare의 위치를 잡아줌. 
    let compare = ""; // 단어의 재료 하나씩을 임시로 담는 변수, copyWord[j]와 비교 맞으면 sentence에 담음.
    let removeI = -1; // copyWord 배열에서 맞는 단어를 지워주기 위한 변수, compare와 일치하는 단어의 인덱스를 담아 삭제.
    let isfound = false; 
    while (sentence !== babbling[i]) {
      isfound = false;
      // "ayaye"
      for (let j = 0; j < copyWord.length; j++) {
        // "ye", ma , aya, woo
        for (let k = 0 + sentenceI; k < copyWord[j].length + sentenceI; k++) {
          compare += babbling[i][k];
        }
        // 찾음
        if (compare === copyWord[j]) {
          sentence += compare;
          sentenceI += compare.length;
          removeI = j;
          isfound = true;
        }
        // 지우기
        if (removeI > -1) {
          copyWord[removeI] = 0;
          removeI = -1;
        }
        compare = "";
      }
      if(!isfound) {
        break;
      }
    }
    if(isfound){
      count++;
    }
  }
  return count;
}

// console.log(solution(["ayaye", "wo"])); // 1

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
// console.log(solution(["ayaye", "yea"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
