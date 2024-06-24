// https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let answer = Array(11).fill(0);
  let maxDiff = -Infinity;
  const apeachMaxScore = info.reduce(
    (acc, x, i) => acc + (x > 0 ? 10 - i : 0),
    0
  );
  function dfs(index, arrowsLeft, ryanScore, apeachScore, ryanResult) {
    if (index > 10) {
      
      if (arrowsLeft > 0) {
        ryanResult[10] += arrowsLeft; // 남은 화살 모두 0점에 사용
      }
      const scoreDiff = ryanScore - apeachScore;
      if (scoreDiff > maxDiff) {
        maxDiff = scoreDiff;
        answer = ryanResult.slice();
      } else if (scoreDiff === maxDiff) {
        // 최소 점수대에서 많은 화살을 사용한 케이스 선택
        for (let i = 10; i >= 0; i--) {
          if (answer[i] < ryanResult[i]) {
            answer = ryanResult.slice();
            break;
          } else if (answer[i] > ryanResult[i]) {
            break;
          }
        }
      }
      return;
    }

    // 이 점수를 라이언이 가져가는 경우
    if (arrowsLeft > info[index]) {
      const newResult = ryanResult.slice();
      newResult[index] = info[index] + 1;
      dfs(
        index + 1,
        arrowsLeft - (info[index] + 1),
        ryanScore + (10 - index),
        apeachScore - (info[index] > 0 ? 10 - index : 0),
        newResult
      );
    }

    // 이 점수를 어피치가 가져가는 경우
    dfs(index + 1, arrowsLeft, ryanScore, apeachScore, ryanResult);
  }

  dfs(0, n, 0, apeachMaxScore, Array(11).fill(0));

  if (maxDiff <= 0) return [-1]; // 라이언이 이길 수 없는 경우
  return answer;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // 	[0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // 	[1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0]
