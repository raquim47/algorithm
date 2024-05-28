// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const seen = new Set();
  let prevWord = words[0];

  seen.add(prevWord);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (seen.has(word) || prevWord[prevWord.length - 1] !== word[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    seen.add(word);
    prevWord = word;
  }

  return [0, 0];
}


console.log(
  solution(2, ['hello', 'one', 'even', 'one', 'now', 'world', 'draw'])
); // 	[2,2]
