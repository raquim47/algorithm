// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return (fibonacci(n - 1) + fibonacci(n - 2)) % 1234567;
    }
  }

  return fibonacci(n);
}

console.log(solution(3)); // 2
