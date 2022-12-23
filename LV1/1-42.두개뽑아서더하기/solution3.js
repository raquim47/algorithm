// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
function setAscending(arr, maxNumber) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let min = maxNumber;
    let tempI = -1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        tempI = j;
      }
    }

    newArr[i] = min;
    // newArr[i] = arr[tempI];
    arr[tempI] = maxNumber;
  }

  return newArr;
}

function isNotInArr(arr, value) {
  for (let k = 0; k < arr.length; k++) {
    if (value === arr[k]) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  let arr = [];
  let arrI = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (isNotInArr(arr, sum)) {
        arr[arrI] = sum;
        arrI++;
      }
    }
  }

  return setAscending(arr, 201);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); //	[2,5,7,9,12]
