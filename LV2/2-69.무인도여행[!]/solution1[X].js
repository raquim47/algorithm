// https://school.programmers.co.kr/learn/courses/30/lessons/154540
'X591X'
'X1X5X'
'X231X'
'1XXX1'

function solution(maps) {
  const x = 'X'.repeat(maps[0].length + 2);
  const newMap = [x, ...maps.map(v => 'X' + v + 'X'), x]
  
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      const current = maps[i][j];
      if(current !== 'X'){
      }
    }
    
  }
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])); // [1, 1, 27]]
