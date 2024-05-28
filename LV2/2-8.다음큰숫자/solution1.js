// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 다음큰숫자 > 78;

function count1Frombinary(num) {
  return (num.toString(2) + '').split('').reduce((acc, cur) => acc + +cur, 0);
}

function solution(n) {
  const count1OfbinaryN = count1Frombinary(n);
  let answer = n + 1;
  while (count1OfbinaryN !== count1Frombinary(answer)) {
    answer++;
  }
  return answer;
}

console.log(solution(78)); // 83
