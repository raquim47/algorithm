// 주어진 문자열이 회문인 경우(앞에서 뒤로 읽어도 같은 내용인 경우) true를 반환하고, 그렇지 않은 경우 false를 반환하는 재귀 함수인 isPalindrome을 작성하십시오.

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}
// Answer
// 위에 작성한 내코드는 짝수인 경우를 고려하기 위해 str.length === 0라는 조건을 넣었는데 그럼 ''도 true가 되기 때문에 맞지 않다.
function isPalindrome2(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome2(str.slice(1,-1))
  return false;
}
console.log(isPalindrome2('aaaa')); // true
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome2('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false
