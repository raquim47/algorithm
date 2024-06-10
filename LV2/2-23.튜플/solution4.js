// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const tupleMap = new Map();
  
  // 정규 표현식을 사용하여 숫자만 추출
  const numbers = s.match(/\d+/g).map(Number);
  
  // 숫자별 빈도수 계산
  numbers.forEach(number => {
    tupleMap.set(number, (tupleMap.get(number) || 0) + 1);
  });

  // 빈도수에 따라 정렬하여 튜플 복원
  const result = Array.from(tupleMap.entries())
    .sort((a, b) => b[1] - a[1])
    // .map(entry => entry[0]);

  return result;
}


console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
// console.log(solution('{{123}}')); // [123]
