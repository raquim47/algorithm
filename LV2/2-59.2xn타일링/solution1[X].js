// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  let count = 0;
  const dp = [0]
  while (dp.length > 0) {
    const current = dp.shift();
    const c1 = current + 1;
    const c2 = current + 2;
    
    if(c1 === n){
      count++
    } else if(c1 < n){
      dp.push(c1)
    }

    if(c2 === n){
      count++
    } else if(c2 < n){
      dp.push(c2)
    }
  }

  return count;
}

console.log(solution(4)); // 	5
