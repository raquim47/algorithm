// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  const answer = [];
  const dictionary = new Map();
  for (let i = 1; i <= 26; i++) {
    dictionary.set(String.fromCharCode(64 + i), [i]);
  }
  
  let i = 0;

  while (i <= msg.length) {
    let content = dictionary.get(msg[i]);
    let number;
    while(content.length > 1){
          
    }
  }
  return dictionary;
}
// console.log('Z'.charCodeAt(0) - 64)
console.log(solution('KAKAO')); // [11, 1, 27, 15]
