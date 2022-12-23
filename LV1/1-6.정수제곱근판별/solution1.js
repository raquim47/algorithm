// https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
  let i = 1;
  let x = -1;
  while(i*i <= 50000000000000){
    if(i*i === n){
      x = i;
      break;
    }
    i++;
  }
  if(x > 0) {
    return (x+1)*(x+1);
  } else {
    return x;
  }
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
