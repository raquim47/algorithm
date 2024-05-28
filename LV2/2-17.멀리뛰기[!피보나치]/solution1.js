// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  if (n === 1) return 1; // n이 1일 경우, 1칸을 뛰는 방법만 있습니다.
  const fibNums = [null, 1, 2]; // 0칸: 0가지 방법, 1칸: 1가지 방법, 2칸: 2가지 방법
  for (let i = 3; i <= n; i++) {
    fibNums[i] = (fibNums[i - 1] + fibNums[i - 2]) % 1234567; // 모듈러 연산을 루프 안에서 처리
  }
  return fibNums[n]; // n칸에 도달하는 방법의 수 반환
}

console.log(solution(4)); // 5
