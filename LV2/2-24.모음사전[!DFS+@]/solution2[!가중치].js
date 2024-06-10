// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  const weights = [781, 156, 31, 6, 1]; // 이 가중치들은 각 글자 위치에 따른 조합 수를 나타냅니다.
  // 5**0 1
  // 5**0 + 5**1 5
  // 5**0 + 5**1 + 5**2 31
  // 5**0 + 5**1 + 5**2 5**3 156
  // 5**0 + 5**1 + 5**2 5**3 5**4 781

  // 각 글자에 대해 반복
  for (let i = 0; i < word.length; i++) {
      // 현재 글자의 사전에서의 위치를 찾습니다 (0-based index)
      let index = vowels.indexOf(word[i]);
      console.log(word[i], i, index)
      // 현재 위치의 가중치와 글자의 인덱스(위치값)를 곱해서 count에 더합니다.
      count += index * weights[i] + 1; // +1을 하는 이유는 각 글자 위치 시작을 1로 계산하기 위함입니다.
  }

  return count;
}
console.log(solution('AAAE')); // 10
