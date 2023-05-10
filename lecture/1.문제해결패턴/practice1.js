// 연습문제 1
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어지면, 두 숫자가 자릿수의 동일한 빈도수를 가지고 있는지 확인합니다.
// O(n)의 복잡도를 가져야 합니다.

// My Code
function sameFrequency(num1, num2) {
  const str1 = num1 + '';
  const str2 = num2 + '';
  if (str1.length !== str2.length) return false;

  const obj = {};
  for (const val of str1) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (const val of str2) {
    if(!obj[val]) return false;
    obj[val] -= 1;
  }
  return true ;
}
// console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false
