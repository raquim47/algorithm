// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const map = new Map();

  function combi(str, len, start = 0, path = '') {
    if (path.length === len) {
      // 정렬된 문자열을 맵에 기록 (조합을 정렬하여 통일성 유지)
      const sortedPath = path.split('').sort().join('');
      map.set(sortedPath, (map.get(sortedPath) || 0) + 1);
      return;
    }
    for (let i = start; i < str.length; i++) {
      combi(str, len, i + 1, path + str[i]);
    }
  }

  orders.forEach((order) => {
    course.forEach((c) => {
      combi(order, c); // 각 주문별로 가능한 모든 조합 계산
    });
  });
  const result = [];

  course.forEach((c) => {
    let maxCount = 0;
    const candidates = [];

    for (let [key, count] of map.entries()) {
      if (key.length === c && count > 1) {
        // 최소 2번 이상 주문된 경우만 고려
        if (count > maxCount) {
          maxCount = count;
          candidates.length = 0;
          candidates.push(key);
        } else if (count === maxCount) {
          candidates.push(key);
        }
      }
    }

    result.push(...candidates);
  });

  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]

// function combi(str, len, start = 0, path = '') {
//   const result = [];

//   if (path.length === len) {
//     return [path];
//   }

//   for (let i = start; i < str.length; i++) {
//     result.push(...combi(str, len, i + 1, path + str[i]));
//   }
//   return result;
// }

// console.log(combi('ABCD', 3));
