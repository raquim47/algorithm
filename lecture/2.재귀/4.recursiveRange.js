// recursiveRange라는 함수를 작성하세요. 이 함수는 숫자를 입력받아 0부터 입력받은 숫자까지의 모든 숫자를 더한 값을 반환해야 합니다.

function recursiveRange(num) {
  if(num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
