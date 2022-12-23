// https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
  let newArr = [];
  let newArrI = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      newArr[newArrI] = arr[i];
      newArrI++;
    }
  }

  if (newArr[0]) {
    let arrangeNewArr = [];

    for (let i = newArr.length - 1; i >= 0; i--) {
      let removeI = -1;
      let max = -1;

      for (let j = 0; j < newArr.length; j++) {
        if (max < newArr[j]) {
          max = newArr[j];
          removeI = j;
        }
      }

      newArr[removeI] = -1;
      arrangeNewArr[i] = max;
    }

    return arrangeNewArr;
  } else {
    return [-1];
  }
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); //	[1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); //	[-1]
