// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  const hash = {};
  // 전화번호를 해시 테이블에 저장
  phone_book.forEach(num => {
    hash[num] = true;
  });

  // 각 전화번호를 순회하며 접두사가 존재하는지 확인
  for (const num of phone_book) {
    let str = '';
    for (let i = 0; i < num.length - 1; i++) {
      str += num[i];
      if (hash[str]) return false;  // 만약 현재 생성된 문자열이 해시 테이블에 존재하면 false 반환
    }
  }
  return true;  // 접두사가 발견되지 않으면 true 반환
}

// console.log(solution(['119', '19'])); // false
console.log(solution(['12', '123', '1235', '567', '88'])); // false
