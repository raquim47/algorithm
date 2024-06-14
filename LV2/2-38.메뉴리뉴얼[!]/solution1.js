// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const combiMap = new Map();

  function makeCombi(order, start, combi) {
    if (combi.length > 1) {
      const combStr = combi.join('');
      combiMap.set(combStr, (combiMap.get(combStr) || 0) + 1);
    }
    for (let i = start; i < order.length; i++) {
      combi.push(order[i]);
      makeCombi(order, i + 1, combi);
      combi.pop();
    }
  }

  for (let order of orders) {
    const sortedOrder = order.split('').sort();
    makeCombi(sortedOrder, 0, []);
  }
  const result = [];
  // 각 코스 요리의 길이에 따라 인기 메뉴 조합을 찾아 결과 배열에 추가
  course.forEach((courseSize) => {
    let maxCount = 0;
    const candidates = [];

    combiMap.forEach((count, combi) => {
      if (combi.length !== courseSize) return;
      
      if (count > maxCount && count > 1) {
        // 최소 2회 이상 주문된 조합만
        maxCount = count;
        candidates.length = 0;
      }
      
      if (count === maxCount) {
        candidates.push(combi);
      }
    });

    result.push(...candidates);
  });

  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
