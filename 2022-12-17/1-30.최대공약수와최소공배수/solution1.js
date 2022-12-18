// https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

function setDivisor(num){
  let divisorArr = [];
  let divisorArrI = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorArr[divisorArrI] = i;
      divisorArrI++;
    }
  }
  return divisorArr;
}

function solution(n, m) {
  const divisorArrN = setDivisor(n);
  const divisorArrM = setDivisor(m);

  let minDivisor = -1;
  for (let i = 0; i < divisorArrN.length; i++) {
    for (let j = 0; j < divisorArrM.length; j++) {
      if(divisorArrN[i] === divisorArrM[j]){
        minDivisor = divisorArrN[i]
      }
    }
  }
  return [minDivisor, n * m / minDivisor];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
