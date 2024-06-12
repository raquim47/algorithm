// https://school.programmers.co.kr/learn/courses/30/lessons/17680

// Map 객체는 키-값 쌍을 저장하고, keys() 메서드를 통해 이터레이터를 생성합니다. 이 이터레이터의 next() 메서드는 호출 시마다 현재 위치의 키를 반환하고, 내부적으로 다음 위치로 이동합니다.

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  const cache = new Set();
  const keyIterator = cache.keys();

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.has(city)) {
      time += 1;
      cache.delete(city);
    } else {
      if (cache.size === cacheSize) {
        cache.delete(keyIterator.next().value);
      }
      time += 5;
    }
    cache.add(city);
  }
  return time;
}

console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])); // 16
// console.log(solution(5, ['a', 'b', 'c', 'a'])); // 16
