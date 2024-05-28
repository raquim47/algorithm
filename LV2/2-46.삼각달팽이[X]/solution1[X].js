// https://school.programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = 0; i >0; i-= 3) {
    const element = array[i];
    
  }
  const arr = new Array(n).fill(null).map((_, i) => new Array(i + 1));
  let value = 1;
  let x = 0, y = 0;
  let direction = 0;
  // while(value <= length){
  //   arr[y, x] = value;

  // }
  return [[1], [2,3],[3,5,6],[4,5,6,7]].flat()
}

console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
