// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  const casheMap = new Map();
  let time = 0;
  let oldKey = cities[0].toLowerCase();

  for (let i = 0; i < cities.length; i++) {
    const currentCity = cities[i].toLowerCase();
    if (casheMap.has(currentCity)) {
      const next = casheMap.get(currentCity);
      if (oldKey === currentCity && next) {
        oldKey = next;
        casheMap.set(next, currentCity);
      }
      time++;
    } else {
      if (cacheSize && casheMap.size >= cacheSize) {
        const next = casheMap.get(oldKey);
        casheMap.delete(oldKey);
        oldKey = next;
      }
      let nextCity;
      for (let j = 1; i + j < cities.length; j++) {
        if (currentCity !== cities[i + j].toLowerCase()) {
          nextCity = cities[i + j].toLowerCase();
          break;
        }
      }

      if (cacheSize) {
        casheMap.set(currentCity, nextCity || null);
      }
      time += 5;
    }
  }

  return time;
}

// console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])); // 16
// console.log(solution(5, ['a', 'b', 'c', 'a'])); // 16
console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
); // 예상 출력: 36
