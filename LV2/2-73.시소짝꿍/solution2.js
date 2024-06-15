// https://school.programmers.co.kr/learn/courses/30/lessons/152996

function solution(weights) {
  let map = new Map();

  for (let i = 0; i < weights.length; i++) {
    let w = weights[i];
    map.set(w, (map.get(w) || 0) + 1);
  }
  let answer = 0;

  let ratios = [2, 4 / 3, 1.5];

  for (let [key, val] of map) {
    // 자기 자신과 짝을 이룰 수 있는 경우도 고려하여 (val * (val - 1)) / 2 공식을 사용하여 해당 몸무게 내에서 선택할 수 있는 짝의 수를 계산합니다.
    answer += (val * (val - 1)) / 2;

    for (let r of ratios) {
      if (map.has(r * key)) {
        answer += val * map.get(r * key);
      }
    }
    // 각 몸무게 key에 대해, 해당 몸무게를 기준으로 ratios에 있는 비율을 곱한 결과가 몸무게 목록에 존재하는지 확인합니다. 만약 존재한다면, 현재 몸무게의 수 (val)와 비율로 계산된 몸무게의 수(map.get(r * key))를 곱하여 가능한 짝의 수를 더합니다.
  }

  return answer;
}
console.log(solution([100, 180, 360, 100, 270])); // 4
// 100 100 180 270 360
