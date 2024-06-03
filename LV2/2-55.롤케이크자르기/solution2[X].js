// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let cutIdx = Math.floor(topping.length / 2);
  let spareIdx;

  const left = new Map();
  const right = new Map();
  let count = 0;

  for (let i = 0; i < topping.length; i++) {
    const t = topping[i];
    if (i < cutIdx) {
      left.set(t, (left.get(t) || 0) + 1);
    } else {
      right.set(t, (right.get(t) || 0) + 1);
    }
  }

  while(true){
    if(left.size < right.size){
      
    } else if (left.size < right.size){

    } else {// 같을 경우 왼쪽으로 갔다가 오른쪽으로

    }
  }
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
