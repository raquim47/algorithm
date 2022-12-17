// https://school.programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function removeMinNumber(arr) {
  let newArr = [];
  let newArrI = 0;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (min !== arr[i]) {
      newArr[newArrI] = arr[i];
      newArrI++;
    }
  }

  return newArr;
}

function solution(arr) {
  if (removeMinNumber(arr)[0]) {
    return removeMinNumber(arr);
  } else {
    return [-1];
  }
}

console.log(solution([4, 3, 2, 1])); //	[4,3,2]
console.log(solution([10])); // [-1]
