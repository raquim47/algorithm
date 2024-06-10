// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  // 입력 문자열에서 숫자 부분만 추출하여 2차원 배열로 변환
  const tupleSets = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((set) => set.split(',').map((num) => parseInt(num)));

  // 각 집합의 길이에 따라 정렬
  tupleSets.sort((a, b) => a.length - b.length);
  const answer = [];
  const elementSet = new Set();

  // 정렬된 집합 배열을 순회하면서 아직 결과 배열에 추가되지 않은 원소를 찾아 추가
  for (const set of tupleSets) {
    for (const num of set) {
      if (!elementSet.has(num)) {
        elementSet.add(num);
        answer.push(num);
        break;
      }
    }
  }

  return answer;
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
// console.log(solution('{{123}}')); // [2, 1, 3, 4]
