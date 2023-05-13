// fib이라는 재귀 함수를 작성하세요. 이 함수는 숫자를 입력받아 피보나치 수열에서 해당하는 위치의 숫자를 반환해야 합니다. 피보나치 수열은 1, 1, 2, 3, 5, 8 등의 정수로 이루어진 수열로, 1과 1로 시작하며 그 다음 숫자부터는 이전 두 숫자의 합으로 이루어집니다.

// My Code 해결 못함 ㅜㅜ
function fib(index) {
  let count = 0;
  function inner(num) {
    count++;

    if (count === index) {
    }
    return num + inner(num + 1);
  }
  inner(1);
}

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}
// fib(3) + fib(2);
// fib(2) + fib(1) + 1

console.log(fib2(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465
