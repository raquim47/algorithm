// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
  let arr = [];
  
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let part = "";
    for (let j = 0; j < p.length; j++) {
      part += t[i + j]
    }
    arr[i] = part;
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Number(arr[i]) <= Number(p)){
      count++
    }
  }

  return count;
}

// console.log(solution("3141592", "271")); // 2
// console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3
