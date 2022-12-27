// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  // lost와 reserve를 오름차순으로 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  
  // min : 체육복을 잃어버리진 않은 학생수
  const min = n - lost.length;
  let save = 0;

  // 같은 번호 찾기
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        save += 1;
        lost[i] = -1;
        reserve[j] = -1;
        break;
      }
    }
  }
  // console.log(lost, reserve, save)
  
  // lost의 번호가 reserve 번호의 +1, -1과 같으면 
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] + 1 || lost[i] === reserve[j] - 1) {
        save += 1;
        reserve[j] = -1;
        break;
      }
    }
  }
  
  return min + save;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
