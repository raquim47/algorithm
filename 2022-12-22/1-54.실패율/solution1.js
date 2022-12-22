// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  let arr = [];

  for (let i = 0; i < N; i++) {
    let participant = 0;
    let fail = 0;

    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i + 1) {
        participant++;
      }
      if (stages[j] === i + 1) {
        fail++;
      }
    }
    
    const per = fail / participant; 
    if(per > 0){
      arr[i] = per;
    } else {
      arr[i] = 0
    }
  }
  return arr
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let max = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= max) {
        max = arr[j];
      }
    }


    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === max) {
        arr[j] = -1;
        newArr.push(j + 1)
        break;
      }
    }
  }

  return newArr;
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
console.log(solution(5, [4, 4, 4, 4, 4])); //[4,1,2,3]
