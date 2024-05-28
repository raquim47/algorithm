// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const yellowPerimeter = brown / 2 - 2;
  for (let i = 1; i <= yellowPerimeter / 2; i++) {
    if (i * (yellowPerimeter - i) === yellow) {
      return [yellowPerimeter - i + 2, i + 2];
    }
  }
}

console.log(solution(24, 24)); //		[8, 6]
