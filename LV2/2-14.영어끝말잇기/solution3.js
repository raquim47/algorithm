// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const hash = new Set();
  const hashIter = hash.values();
  hash.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const lastWord = hashIter.next().value;
    if (hash.has(word) || lastWord[lastWord.length - 1] !== word[0]) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      hash.add(word);
    }
  }

  return [0,0]
}

console.log(
  solution(2, ['hello', 'one', 'even', 'one', 'now', 'world', 'draw'])
); // 	[2,2]
