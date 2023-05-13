// power라는 함수를 작성하세요. 이 함수는 밑과 지수를 입력받아 밑의 지수 제곱을 반환해야 합니다. 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음수인 밑이나 지수는 주어지지 않습니다.
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
