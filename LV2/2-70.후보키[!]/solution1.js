// https://school.programmers.co.kr/learn/courses/30/lessons/42890

function solution(relation) {
  let column = relation[0].length;
  const candidates = [];

  function getCombi(arr, n) {
    const results = [];
    if (n === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1);
      const combinations = getCombi(rest, n - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });
    return results;
  }
  
  // 유일성 검사 함수
  function isUnique(combination) {
    const seen = new Set();
    for (const row of relation) {
      const key = combination.map((index) => row[index]).join(',');
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
    }
    return true;
  }
  
  // 최소성 검사 함수
  function isMinimal(combination) {
    for (const candidate of candidates) {
      if (candidate.every((value) => combination.includes(value))) {
        return false;
      }
    }
    return true;
  }
  for (let i = 1; i <= column; i++) {
    const combinations = getCombi([...Array(column).keys()], i);
    for (const combination of combinations) {
      if (isUnique(combination) && isMinimal(combination)) {
        candidates.push(combination);
      }
    }
  }
  return candidates.length;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
); // 2
