// https://school.programmers.co.kr/learn/courses/30/lessons/120880?language=javascript
// 1. 내림차순으로 정렬한다.
// 2. 배열을 돌린다
// 3. 요소 - n의 절대값이 가장 작은 것을 찾아라
// 3.
function solution(numlist, n) {
  const arr = numlist.sort((a, b) => b - a);
  let newArr = [];
  let newArrI = 0;
  let max = 10001;
  let num;
  for (let i = 0; i < arr.length; i++) {
    // 요소 - n의 절대값이 가장 작은 것을 찾아라
    for (let j = 0; j < arr.length; j++) {
      if (max > Math.abs(arr[j] - n)) {
        max = Math.abs(arr[j] - n);
        num = arr[j];
      }
    }
    newArr[newArrI] = num;
    newArrI++;
    // 찾은 것 지우기
    for (let j = 0; j < arr.length; j++) {
      if (num === arr[j]) {
        arr[j] = null;
        break;
      }
    }
    max = 10001;
  }
  return newArr;
}

console.log(solution([1, 7000, 5, 10000], 1)); //[1, 5, 7000, 10000]
console.log(solution([1, 2, 3, 4, 5, 6], 4)); //[4, 5, 3, 6, 2, 1]
console.log(solution([1, 2, 3, 4, 5, 6 , 7], 4)); //[4, 5, 3, 6, 2, 7, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //	[36, 40, 20, 47, 10, 6, 7000, 10000]
