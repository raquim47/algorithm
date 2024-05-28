// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
console.log(solution(['1','22','333','123'])); // false
// console.log(solution(['12', '123', '1235', '567', '88'])); // false
