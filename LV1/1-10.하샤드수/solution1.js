// https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  const str = x + "";
  let calc = 0;
  
  for (let i = 0; i < str.length; i++) {
    calc += Number(str[i]);  
  }

  if(x % calc === 0){
    return true;
  } else {
    return false;
  }
}

console.log(solution(10)); //	true
console.log(solution(12)); //	true
console.log(solution(11)); //false
console.log(solution(13)); //false
