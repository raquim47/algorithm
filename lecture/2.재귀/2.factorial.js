// factorial이라는 함수를 작성하세요. 이 함수는 숫자를 입력받아 해당 숫자의 팩토리얼을 반환해야 합니다. 팩토리얼은 주어진 정수와 그 아래의 모든 정수의 곱으로 정의됩니다. 예를 들어, 4의 팩토리얼 (4!)은 4 * 3 * 2 * 1로 계산되어 24가 됩니다. 0의 팩토리얼 (0!)은 항상 1입니다.

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
