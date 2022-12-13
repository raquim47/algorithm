// https://school.programmers.co.kr/learn/courses/30/lessons/120812?language=javascript
// 1. 오름차순으로 정렬한다
// 2. 배열 요소를 확인한다.
// 3. 요소를 beforeNum에 저장한다 다음 요소로 넘어간다
// 4. 현재 요소와 brforeNum을 비교한다
// 4-1. 
// 같으면 count++, 
// 다르면 
//   -> maxCount와 count를 비교한다
//   maxCount < count 면 maxCount = count, maxNum = beforeNum;
//   count = 0;

function solution(array) {
  const sorted = array.sort((a, b) => a - b);
  let beforeNum;
  let maxNum;
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < sorted.length; i++) {
    beforeNum = sorted[i];
    if(beforeNum === sorted[i]){
      count++
    } else {
      if(maxCount < count){
        maxCount = count;
        maxNum = beforeNum;
      }
      count = ""
    }
  }
  if(maxCount === 0){
    return -1;
  } else {
    return maxNum;
  }
}

console.log(solution([1, 2, 3, 3, 3, 4])); //	3
console.log(solution([1, 1, 2, 2])); //-1
console.log(solution([1])); //	1
