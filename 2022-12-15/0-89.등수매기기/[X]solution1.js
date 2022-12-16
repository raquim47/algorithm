// https://school.programmers.co.kr/learn/courses/30/lessons/120882?language=javascript
function solution(score) {
  // 평균 배열
  let ave = [];
  for (let i = 0; i < score.length; i++) {
    ave[i] = (score[i][0] + score[i][1]) / 2;
  }

  let rank = 1;
  let rankCount = 0;
  let max = -1;
  const copyAve = [...ave];
  for (let i = 0; i < ave.length; i++) {
    // 최대값 구하기
    for (let j = 0; j < ave.length; j++) {
      if (max < ave[j]) {
        max = ave[j];
      }
    }
    for (let j = 0; j < copyAve.length; j++) {
      if (max === copyAve[j]) {
        ave[j] = -1;
        copyAve[j] = rank;
        rankCount++;
      }
    }
    if (rankCount >= 2) {
      rank += rankCount;
    } else {
      rank++;
    }
    rankCount = 0;
    max = -1;
  }
  return copyAve;
}

console.log(
  solution([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ])
); //	[1, 1 , 3]

// console.log(
//   solution([
//     [80, 70],
//     [80, 75],
//     [40, 70],
//     [50, 80],
//   ])
// ); //	[2, 1, 4, 3]

// console.log(
//   solution([
//     [80, 70],
//     [90, 50],
//     [40, 70],
//     [50, 80],
//   ])
// ); //	[1, 2, 4, 3]
// console.log(
//   solution([
//     [80, 70],
//     [70, 80],
//     [30, 50],
//     [90, 100],
//     [100, 90],
//     [100, 100],
//     [10, 30],
//   ])
// ); //	[4, 4, 6, 2, 2, 1, 7]
