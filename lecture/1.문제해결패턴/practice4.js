// 연습문제4
// 두 문자열을 인자로 받는 isSubsequence라는 함수를 작성하세요. 이 함수는 첫 번째 문자열의 문자들이 두 번째 문자열의 문자들의 부분 수열을 형성하는지 확인해야 합니다. 다시 말해, 첫 번째 문자열의 문자들이 두 번째 문자열의 어딘가에 순서가 변경되지 않은 채로 나타나는지 확인해야 합니다.

// Restrictions: Time - O(N + M), Space - O(1)

// My Code
function isSubsequence(str1, str2) {
  let pointer = 0;
  for (const val of str2) {
    if (str1[pointer] === val) {
      pointer++;
    }
  }
  if (pointer === str1.length) {
    return true;
  } else {
    return false;
  }
}

// Lecture Code
function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
