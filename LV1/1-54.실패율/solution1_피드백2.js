// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function toFailRateArr(N, stages) {
  let failRateArr = [];

  for (let i = 0; i < N; i++) {
    let participant = 0;
    let failer = 0;
    let failRate = 0;

    for (let j = 0; j < stages.length; j++) {
      if(stages[j] >= i + 1){
        participant += 1;
      }

      if(stages[j] === i + 1){
        failer += 1;
      }  
    }

    if(participant > 0){
      failRate = failer / participant;
    }

    failRateArr[i] = failRate;

    for (let i = 0; i < failRateArr.length; i++) {
      let max = 0;

      for (let j = 0; j < failRateArr.length; j++) {
        if (failRateArr[j] >= max) {
          max = failRateArr[j];
        }
      }

      for (let j = 0; j < failRateArr.length; j++) {
        if (failRateArr[j] === max) {
          failRateArr[j] = -1;
          result.push(j + 1);
          break;
        }
      }
    }
  }


  return result;
}
function solution(N, stages) {
  return toFailRateArr(N, stages);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
// console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
