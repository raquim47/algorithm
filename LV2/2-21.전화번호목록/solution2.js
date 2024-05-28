// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  const hash = {};
  let minLength = Infinity;
  phone_book.forEach((num) => {
    if (num.length < minLength) minLength = num.length;
    hash[num] = true;
  });

  for (const num of phone_book) {
    if (num.length <= minLength) continue;

    let str = '';
    for (let i = 0; i < num.length - 1; i++) {
      str += num[i];
      if (str.length >= minLength && hash[str]) return false;
    }
  }
  return true;
}

// console.log(solution(['119', '19'])); // false
console.log(solution(['12', '123', '1235', '567', '88'])); // false
