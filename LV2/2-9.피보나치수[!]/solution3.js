// https://school.programmers.co.kr/learn/courses/30/lessons/12945

// 큰 n에 대해서 재귀를 사용할 경우 각 재귀 호출마다 함수 호출 스택에 추가적인 메모리가 사용됩니다. 이로 인해 메모리 사용량이 급격히 증가하고, 실행 시간도 크게 늘어날 수 있습니다. 이 경우엔 반복적 방식이 재귀적 방식보다 훨씬 효율적입니다.

function solution(n) {
  let a = 0, b = 1;

  for(let i = 2; i <= n; i++) {
    const sum = (a + b) % 1234567;
    a = b;
    b = sum;
  }

  return n === 0 ? a : b;
}

console.log(solution(3)); // 2
