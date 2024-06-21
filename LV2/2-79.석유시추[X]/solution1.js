// https://school.programmers.co.kr/learn/courses/30/lessons/250136
function recursive(arr, row, col, count){
  if(arr[row][col] !== 1) return count;
  
  recursive(arr)
}

function solution(land) {
  let max = 0;

  for (let i = 0; i < land[0].length; i++) {
    const copyLand = land.map(row => [...row]);
    let count = 0;

    for (let j = 0; j < land.length; j++) {
      if(copyLand[j][i] === 1){

      }
    }
    // console.log(s);
  }
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
); // 9
