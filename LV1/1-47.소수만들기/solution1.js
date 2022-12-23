// https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function sub(value){
  if(value % 2 === 0){
    return false;
  }

  for (let i = 3; i <= Math.sqrt(value); i+=2) {
    if(value % i === 0){
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let answer = 0;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        
        if(sub(sum)){
          answer++;
        }
      }
    }
  }
  return answer;
}

// console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
