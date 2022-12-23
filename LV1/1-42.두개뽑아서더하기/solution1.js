// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  let arr = [];
  let arrI = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let isduplic = false;

      for (let k = 0; k < arr.length; k++) {
        if (numbers[i] + numbers[j] === arr[k]) {
          isduplic = true;
          break;
        }
      }

      if (!isduplic) {
        arr[arrI] = numbers[i] + numbers[j];
        arrI++;
      }
    }
  }
  
  arr = arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); //	[2,5,7,9,12]
