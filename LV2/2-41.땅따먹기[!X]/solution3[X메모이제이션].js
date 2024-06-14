// https://school.programmers.co.kr/learn/courses/30/lessons/12913

// 완전탐색 + 메모이제이션
// 메모이제이션을 사용함에도 불구하고, 이 방식은 여전히 많은 재귀 호출을 필요로 하며, 호출 스택의 크기가 크거나 계산해야 할 행의 수가 매우 많은 경우에는 시스템 자원에 부담을 줄 수 있습니다. 이런 경우 동적 프로그래밍(Dynamic Programming) 접근법으로 최적화하는 것이 더욱 효율적일 수 있습니다.

function solution(land) {
  let cache = Array.from({ length: land.length }, () => Array(land[0].length).fill(-1));

  function recursive(rowIndex, depth) {
    if (depth === land.length) {
      return 0;
    }
    if (rowIndex !== -1 && cache[depth][rowIndex] !== -1) {
      return cache[depth][rowIndex];
    }

    let max = 0;
    for (let i = 0; i < land[depth].length; i++) {
      if (rowIndex === i) continue; // 같은 열을 선택하지 않도록 한다.
      let sum = land[depth][i] + recursive(i, depth + 1);
      max = Math.max(max, sum);
    }
    // rowIndex가 -1이면 캐시에 저장하지 않는다.
    if (rowIndex !== -1) {
      cache[depth][rowIndex] = max;
    }
    return max;
  }

  return recursive(-1, 0); // 초기 rowIndex를 -1로 설정하여 모든 열을 가능하게 한다.
}

console.log(
  solution([
    [6, 7, 1, 2], // 7
    [2, 3, 10, 8], // 8
    [1, 3, 9, 4], // 9
    [7, 11, 4, 9], // 11
  ])
); // 35
