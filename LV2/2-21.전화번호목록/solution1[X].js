// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  for (const candidate of phone_book) {
    for (const value of phone_book) {
      if (candidate !== value && value.includes(candidate)) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(['119', '97674223', '1195524421'])); // false
// console.log(solution(['12', '123', '1235', '567', '88'])); // false

