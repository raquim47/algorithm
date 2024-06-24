// https://school.programmers.co.kr/learn/courses/30/lessons/42860


function solution(name) {
  let min = Infinity;
  const queue = [
    { current: name[0], remain: name.slice(1), count: 0 },  // 'A' 제거하는 대신 전체 remain을 유지
  ];

  while (queue.length > 0) {
    const { current, remain, count } = queue.shift();
    console.log(current, remain, count);

    // 상하 이동: 현재 문자를 목표 문자로 변경하기 위한 최소 조작 횟수 계산
    const moveUpDown = Math.min(
      current.charCodeAt(0) - 'A'.charCodeAt(0),
      'Z'.charCodeAt(0) - current.charCodeAt(0) + 1
    );

    // 다음 문자로의 이동이 있는 경우
    if (remain.length > 0) {
      queue.push({
        current: remain[0],
        remain: remain.slice(1),
        count: count + moveUpDown + 1,  // 좌우 이동 시 +1 추가
      });
      // 마지막 문자로 가는 경우 (링 구조를 고려하여 뒤에서부터 앞으로 올 경우)
      queue.push({
        current: remain[remain.length - 1],
        remain: remain.slice(0, -1),
        count: count + moveUpDown + 1,  // 좌우 이동 시 +1 추가
      });
    } else {
      // 더 이상 남은 문자가 없는 경우 최소값 갱신
      min = Math.min(min, count + moveUpDown);
    }
  }
  return min;
}

console.log(solution('JEROEN')); // 	56
// console.log(solution('JJAANNAAAA')); // 	23
