// https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

function solution(n) {
  const str = n + "";
  let strArr = [];
  
  for (let i = 0; i < str.length; i++) {
    strArr[i] = str[i]
  }

  let newStr = "";

  for (let i = 0; i < strArr.length; i++) {
    let max = -1;
    let mark = -1;
  
    for (let j = 0; j < strArr.length; j++) {
      if(max < Number(strArr[j])){
        max = Number(strArr[j]);
        mark = j;
      }
    }

    newStr += max;
    strArr[mark] = -1;
  }
  
  return Number(newStr);
}

console.log(solution(118372)); // 873211
