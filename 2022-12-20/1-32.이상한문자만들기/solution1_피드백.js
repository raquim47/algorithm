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
  let wordI = -1;

  if (word >= "a") {
    wordI = checkWordI(word, lowerCase);
  } else {
    wordI = checkWordI(word, upperCase);
  }

  if (count % 2 === 0) {
    return upperCase[wordI];
  } else {
    return lowerCase[wordI];
  }
}

function solution(s) {
  let result = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count = 0;
      result += " ";
    } else {
      result += transformText(s[i], count);
      count++;
    }
  }
  return result;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
console.log(solution("try ahello world")); // "TrY HeLlO WoRlD"
console.log(solution("try abhello world")); // "TrY HeLlO WoRlD"
