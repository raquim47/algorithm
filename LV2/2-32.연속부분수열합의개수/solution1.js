// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const hash = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let piece = elements.slice(j, j + i);
      if (j + i > elements.length) {
        piece = piece.concat(elements.slice(0, j + i - elements.length));
      }
      hash.add(piece.reduce((a, b) => a + b, 0));
    }
  }
  return hash.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
