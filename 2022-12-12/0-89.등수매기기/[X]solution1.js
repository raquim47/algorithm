// https://school.programmers.co.kr/learn/courses/30/lessons/120882?language=javascript

function solution(score) {
  const averageArr = score.map(a => {
    let sum = 0;
    a.forEach(b => sum += b);
    return sum / a.length;
  })
  let newI;
  let nowRank = 0; 
  let max = -1;
  let arr = [];
  [75, 75, 40, 95, 95, 100, 20]
  for(let i = 0; i < averageArr; i++){
    // 최대값 구하기
    for (let j = 0; j < averageArr.length; j++) {
      if(max < averageArr[j]){
        max = averageArr[j];
        nowRank++
        newI = j
      }
    }
    
  }
  return averageArr;
}

console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]	))// [1, 2, 4, 3]
console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	))//[4, 4, 6, 2, 2, 1, 7]