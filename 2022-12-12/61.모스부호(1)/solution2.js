// https://school.programmers.co.kr/learn/courses/30/lessons/120838?language=javascript

function solution(letter) {
  const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }  
  let arr = [];
  let arrIndex = 0;
  let elLength = 0;
  let startIndex;
  (".... . .-.. .-.. ---");
  for (let i = 0; i <= letter.length; i++) {
    // 시작 인덱스
    if (elLength === 0) {
      startIndex = i;
    }
    let str = "";
    // 공백을 발견할때까지 길이++, 공백을 발견하면 시작인덱스부터 길이만큼 새문자열에 담아서 배열에 넣는다.
    // 마지막엔 공백이 없다 -> 조건 추가
    if (letter[i] !== " " && letter[i] !== undefined) {
      elLength++; //3
    } else {
      for (let j = startIndex; j < startIndex + elLength; j++) {
        str += letter[j];
      }
        console.log(str);
      arr[arrIndex] = str;
      arrIndex++;
      elLength = 0;
    }
  }
  // return arr;
  let answer = ""
  for (let i = 0; i < arr.length; i++) {
    answer += morse[arr[i]]; 
  }
  return answer;
}

console.log(solution(".... . .-.. .-.. ---")); //	"hello"
console.log(solution(".--. -.-- - .... --- -.")); //	"python"
