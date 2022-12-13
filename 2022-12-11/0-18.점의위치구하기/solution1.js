// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

function solution(dot) {
  // [x,y] x * y가 양수면 1 또는 3
  //  -> x가 양수면 1, x가 음수면 3
  // [x,y] x * y가 음수면 2 또는 4
  // -> x가 양수면 4, x가 음수면 2;
  // (원소는 0이 아님)
  const [x, y] = dot;
  if (x * y > 0) {
    if (x > 0) {
      return 1;
    } else {
      return 3;
    }
  } else {
    if (x > 0) {
      return 4;
    } else {
      return 2;
    }
  }
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
