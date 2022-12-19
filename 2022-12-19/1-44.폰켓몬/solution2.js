// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function isInArr(arr, value){
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true; 
    }
  }
}

function solution(nums) {
  const amount = nums.length / 2;

  let deduplicatedArr = [];
  let ctn = 0;

  for (let i = 0; i < nums.length; i++) {

    if (!isInArr(deduplicatedArr, nums[i])) {
      deduplicatedArr[ctn] = nums[i];
      ctn++;
    }

    if (ctn > amount) {
      return amount;
    }
  }
  
  return ctn;
}

console.log(solution([3, 1, 2, 3])); // 2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
// console.log(solution([3, 3, 3, 2, 2, 2])); // 2
