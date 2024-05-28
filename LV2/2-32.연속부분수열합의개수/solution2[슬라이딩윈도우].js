// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const n = elements.length;
  const extendedElements = elements.concat(elements);
  const uniqueSums = new Set();

  for (let length = 1; length <= n; length++) {
    let sum = 0;

    for (let i = 0; i < length; i++) {
      sum += extendedElements[i];
    }
    uniqueSums.add(sum);
    
    for (let start = 1; start < n; start++) {
      sum =
        sum -
        extendedElements[start - 1] +
        extendedElements[start + length - 1];
      uniqueSums.add(sum);
    }
  }

  return uniqueSums.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
