// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const numSet = new Set();

  (function makeNumber(nums, currentNum = '') {
    if (currentNum.length > 0) numSet.add(+currentNum);

    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(0, i) + nums.slice(i + 1);
      makeNumber(newNums, currentNum + nums[i]);
    }
  })(numbers)

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  numSet.forEach((num) => {
    if (isPrime(num)) count++;
  });
  return count;
  // return Array.from(numSet).filter(isPrime).length;
}

// console.log(solution('17')); // 3
console.log(solution('011')); // 2

function solution(numbers) {
  const numSet = new Set();

  function makeNumber(nums, currentNum = '', used = {}) {
    if (currentNum.length > 0) numSet.add(+currentNum);
    if (nums.length === 0 || currentNum.length >= numbers.length) return;

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;  // 이미 사용된 숫자는 건너뛰기
      used[i] = true;
      const newNums = nums.slice(0, i) + nums.slice(i + 1);
      makeNumber(newNums, currentNum + nums[i], used);
      used[i] = false;
    }
  }

  makeNumber(numbers);

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  numSet.forEach(num => {
    if (isPrime(num)) count++;
  });

  return count;
}