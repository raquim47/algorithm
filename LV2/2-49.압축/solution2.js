// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  const answer = [];
  const dictionary = new Map();

  for (let i = 1; i <= 26; i++) {
    dictionary.set(String.fromCharCode(64 + i), i);
  }

  let i = 0;
  while (i < msg.length) {
    let w = msg[i];
    let j = 1;
    console.log(i, j);
    // 사전에서 가장 긴 w 찾기
    while (i + j < msg.length && dictionary.has(w + msg[i + j])) {
      w += msg[i + j];
      j++;
    }

    answer.push(dictionary.get(w));
    dictionary.set(w + msg[i + j], dictionary.size + 1);
    i += j;
  }

  return answer;
}

console.log(solution('KAKAO')); // [11, 1, 27, 15]
