// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  let newArr = [];
  let newArrI = 0;
  let before = -1;

  for (let i = 0; i < arr.length; i++) {
    if (before !== arr[i]) {
      before = arr[i];
      newArr[newArrI] = arr[i];
      newArrI++;
    }
  }
  return newArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
