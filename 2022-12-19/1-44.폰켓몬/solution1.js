// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const amount = nums.length / 2;

  let deduplicatedArr = [];
  let ctn = 0;

  for (let i = 0; i < nums.length; i++) {
    let isDuplic = false;

    for (let j = 0; j < deduplicatedArr.length; j++) {
      if (nums[i] === deduplicatedArr[j]) {
        isDuplic = true;
        break;
      }
    }

    if (!isDuplic) {
      deduplicatedArr[ctn] = nums[i];
      ctn++;
    }
  }
  
  if( deduplicatedArr.length < amount){
    return deduplicatedArr.length;
  } else {
    return amount;
  }
}

// console.log(solution([3, 1, 2, 3])); // 2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
