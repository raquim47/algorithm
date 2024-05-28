// https://school.programmers.co.kr/learn/courses/30/lessons/64065

// Map은 키-값 쌍을 저장하며, 객체보다 더 빠르고 일관된 성능을 제공합니다. 특히 키의 삽입, 검색, 삭제 작업이 자주 일어나는 경우에는 Map이 일반 객체보다 효율적입니다.
// Map으로 바꿨기 때문에 length 계산 불필요
function solution(s) {
  const answer = [];
  const map = new Map();
  let el = '';

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '{') continue;

    if (s[i] === ',' || i === s.length - 2) {
      map.set(el, (map.get(el) || 0) + 1);
      el = '';
    } else if (s[i] !== '}') {
      el += s[i];
    }
  }

  const length = map.size;
  for (const [key, value] of map) {
    answer[length - value] = +key;
  }

  return answer;
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
// console.log(solution('{{123}}')); // [2, 1, 3, 4]
