// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function checkWordI(word, list) {
  for (let i = 0; i < list.length; i++) {
    if (word === list[i]) {
      return i;
    }
  }

  return -1;
}

function transformText(word, count) {
  const lowerCase = "abcdefghijklnmopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";

  const checkCase = (word >= "a") ? lowerCase : upperCase;
  const wordI = checkWordI(word, checkCase);

  const defaultCase = (count % 2 === 0) ? upperCase : lowerCase;
  return defaultCase[wordI];
}

function split(s) {
  const arr = [];
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // console.log('word', word);
      arr.push(word);
      word = '';
    } else {
      word += s[i];
    }
  }

  if (word.length > 0) {
    // console.log('word', word);
    arr.push(word);
    word = '';
  }

  return arr;
}

function convertCase(word) {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result.push(word[i].toUpperCase());
    } else {
      result.push(word[i].toLowerCase());
    }
  }

  return result.join('');
}

function solution(s) {
  const words = split(s);
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    words[i] = convertCase(words[i]);
  }

  return words.join(' ');
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
// console.log(solution("try ahello world")); // "TrY HeLlO WoRlD"
// console.log(solution("try abhello world")); // "TrY HeLlO WoRlD"
