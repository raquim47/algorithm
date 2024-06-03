// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  const left = new Set();
  const right = new Map();
  let count = 0;

  // 처음에는 모든 토핑을 right 맵에 추가
  for (let t of topping) {
      right.set(t, (right.get(t) || 0) + 1);
  }
  // 토핑을 하나씩 left로 옮기면서 확인
  for (let t of topping) {
      left.add(t);
      if (right.get(t) === 1) {
          right.delete(t);
      } else {
          right.set(t, right.get(t) - 1);
      }

      // left와 right의 크기가 같으면 공평하게 나눌 수 있는 경우
      if (left.size === right.size) {
          count++;
      }
  }

  return count;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2

