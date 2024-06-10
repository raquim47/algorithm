// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const numSet = new Set();

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  (function makeNumber(nums, currentNum = '') {
    console.log('currentNum', currentNum);
    if (currentNum.length > 0 && isPrime(currentNum)) numSet.add(+currentNum);

    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(0, i) + nums.slice(i + 1);
      console.log(i, nums, 'newNums', newNums, currentNum + nums[i], numSet);
      makeNumber(newNums, currentNum + nums[i]);
    }
  })(numbers);

  return numSet.size;
}

// console.log(solution('17')); // 3
console.log(solution('011')); // 2
