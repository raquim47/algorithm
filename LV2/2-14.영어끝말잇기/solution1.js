// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const hash = {};
  let lastLetter = '';

  for (let i = 0; i < words.length; i++) {
    if (hash[words[i]] || (i !== 0 && lastLetter !== words[i][0])) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    hash[words[i]] = 1;
    lastLetter = words[i][words[i].length - 1];
  }

  return [0, 0];
}

console.log(
  solution(2, ['hello', 'one', 'even', 'one', 'now', 'world', 'draw'])
); // 	[2,2]
