// https://school.programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let verticalMoves = 0;
  const n = name.length;
  let minMove = n - 1;

  for (let i = 0; i < n; i++) {
    // 상하 이동 횟수 계산
    const charCode = name.charCodeAt(i);
    verticalMoves += Math.min(
      charCode - 'A'.charCodeAt(0),
      'Z'.charCodeAt(0) - charCode + 1
    );

    // 다음 'A'가 아닌 문자 위치 찾기
    let next = i + 1;
    while (next < n && name[next] === 'A') {
      next++;
    }
    console.log(i, next);
    // 현재 위치에서 끝까지 가는 것과, 돌아오는 것 중 최소를 찾기
    minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
  }

  return verticalMoves + minMove;
}

// console.log(solution('JEROEN')); // 56
console.log(solution('BAAAAAAAAAAAABBBBB')); // 결과값을 확인
