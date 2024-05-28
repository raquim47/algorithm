// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantList = new Map();

  for (let i = 0; i < want.length; i++) {
    wantList.set(want[i], number[i]);
  }

  for (let i = 0; i < 10; i++) {
    if (wantList.has(discount[i])) {
      wantList.set(discount[i], wantList.get(discount[i]) - 1);
    }
  }

  const isValid = () => ![...wantList.values()].some((v) => v > 0);

  let answer = +isValid();

  for (let i = 1; i < discount.length - 9; i++) {
    const before = discount[i - 1];
    const next = discount[i + 9];

    if (wantList.has(before)) {
      wantList.set(before, wantList.get(before) + 1);
    }

    if (wantList.has(next)) {
      wantList.set(next, wantList.get(next) - 1);
    }

    answer += +isValid();
  }
  return answer;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken', // - 1
      'apple', // - 2
      'apple', // - 3
      'banana', // - 4
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot', // 1
      'banana', // 2
      'apple', // 3
      'banana', // 4
    ]
  )
); // 3
