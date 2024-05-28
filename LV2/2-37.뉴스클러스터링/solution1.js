// https://school.programmers.co.kr/learn/courses/30/lessons/17677

// A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
// A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때
// 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로
// 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.

function solution(str1, str2) {
  const keyNumber = 65536;

  const A = new Map();
  let union = 0;
  let intersection = 0;

  const isValid = (s) => /^[A-Z]{2}$/.test(s);

  for (let i = 0; i < str1.length - 1; i++) {
    const pair = (str1[i] + str1[i + 1]).toUpperCase();
    if (isValid(pair)) {
      A.set(pair, (A.get(pair) || 0) + 1);
      union++;
    }
  }
  // Map에서 각 키(글자쌍)의 개수를 줄임으로써 교집합에 대해 이미 고려된 원소들을 합집합에서 또다시 고려하지 않도록 하고 있습니다. 이는 합집합의 크기를 올바르게 계산하게 하여 중복 오류를 피한다.
  for (let i = 0; i < str2.length - 1; i++) {
    const pair = (str2[i] + str2[i + 1]).toUpperCase();
    if (isValid(pair)) {
      if (A.get(pair)) {
        A.set(pair, A.get(pair) - 1);
        intersection++;
      } else {
        union++;
      }
    }
  }
  if (!union && !intersection) {
    return keyNumber;
  } else {
    return Math.floor((intersection / union) * keyNumber);
  }
}

// console.log(solution('FRANCE', 'french')); // 16384
console.log(solution('E=M*C^2', 'e=m*c^2')); // 65536
