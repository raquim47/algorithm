// https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let max = -1;
  let maxRecord = [-1];

  for (let i = 0; i < info.length; i++) {
    let opponentSum = 0;
    let mySum = 0;
    let myRecord = Array(info.length).fill(0);
    let arrow = n;

    for (let j = 0; j < i; j++) {
      opponentSum += 10 - j;
    }

    for (let j = i; j < info.length; j++) {
      if (info[j] < arrow) {
        myRecord[j] = info[j] + 1;
        mySum += 10 - j;
        arrow -= info[j] + 1;
      } else if (info[j]) {
        opponentSum += 10 - j;
      }
    }

    const diff = mySum - opponentSum;
    if (max < diff) {
      max = diff;
      maxRecord = myRecord;
    }
  }

  return maxRecord;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // 	[0,2,2,0,1,0,0,0,0,0,0]
