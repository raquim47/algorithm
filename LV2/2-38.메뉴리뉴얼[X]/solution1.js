// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const combinationsMap = new Map();

  function generateCombinations(str, start, path) {
    if (path.length > course[course.length - 1]) return;
    if (path.length >= 2) {
      const combination = path.join('');
      combinationsMap.set(
        combination,
        (combinationsMap.get(combination) || 0) + 1
      );
    }

    for (let i = start; i < str.length; i++) {
      path.push(str[i]);
      generateCombinations(str, i + 1, path);
      path.pop();
    }
  }

  for (let order of orders) {
    const sortedOrder = order.split('').sort();
    generateCombinations(sortedOrder, 0, []);
  }

  const result = [];
  course.forEach((length) => {
    let maxCount = 2;
    const candidates = [];
    combinationsMap.forEach((count, combination) => {
      if (combination.length === length && count >= maxCount) {
        if (count > maxCount) {
          candidates.length = 0;
          maxCount = count;
        }
        candidates.push(combination);
      }
    });
    result.push(...candidates);
  });

  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
