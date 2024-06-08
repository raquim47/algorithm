// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  for (let i = 1; i * i <= yellow; i++) {
    const x = yellow / i + 2;
    const y = i + 2;
    if (yellow % i === 0 && (x + y - 2) * 2 === brown) {
      return [x, y];
    }
  }
}

console.log(solution(10, 2)); //		[4, 3]
// console.log(solution(24, 24)); //		[8, 6]
// console.log(solution(14, 4)); //		[4, 4]
