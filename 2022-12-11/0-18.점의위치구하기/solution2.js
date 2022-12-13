// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

function solution(dot) {
  const [x, y] = dot;
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
