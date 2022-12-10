// https://school.programmers.co.kr/learn/courses/30/lessons/120829?language=javascript
function solution(angle) {
  const arr = [0, 90, 91, 180];
  let answer;
  // 변수에 저장하는 이유: 함수 내에서 return하면 함수가 강제 종료
  // -> 내부의 반복문 또한 중도에 종료하기 때문에 원하는 값을 얻을 수 없음.
  for (let i = 0; i < arr.length; i++) {
    if(angle >= arr[i]){
      answer = i + 1;
    }
  }
  return answer;
}

console.log(solution(70)); // 1
console.log(solution(91)); // 3
console.log(solution(180)); // 4
