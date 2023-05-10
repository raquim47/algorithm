// 연습문제2
// areThereDuplicates라는 함수를 구현하세요. 이 함수는 가변 인자를 받아들이고, 전달된 인자들 사이에 중복이 있는지 확인합니다. 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// Restrictions: Time - O(n), Space - O(n)
// Bonus: Time - O(n log n), Space - O(1)

// My Code
function areThereDuplicates(...arr) {
  if (!arr.length) return false;
  let obj = {};
  for (const val of arr) {
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }
  return false;
}

// 다중 포인터
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => (a > b ? 1 : -1));
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

//  One line
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
