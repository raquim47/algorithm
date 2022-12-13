// https://school.programmers.co.kr/learn/courses/30/lessons/120868?language=javascript
// long이 가장 긴 변인 경우: 
// -> 가지수 : short
// 나머지 한 변이 가장 긴 경우 
// - > 가지수 long + short - long - 1;
// long + 1 부터 sortedArr[0] + sortedArr[1]보다 작은 수  

function solution(sides) {
  const sortedArr = sides.sort((a,b) => b - a);
  const long = sortedArr[0];
  const short = sortedArr[1];
  return short * 2 - 1;    
}
console.log(solution([1, 2])); //	1
console.log(solution([3, 6])); //	5
console.log(solution([11, 7])); //	13
