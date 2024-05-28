// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantList = new Set();
  const cart = new Map();

  for (let i = 0; i < want.length; i++) {
    cart.set(want[i], number[i]);
    wantList.add(want[i]);
  }

  for (let i = 0; i < 10; i++) {
    if (wantList.has(discount[i])) {
      cart.set(discount[i], cart.get(discount[i]) - 1);
    }
  }

  let answer = +Array.from(cart.values()).every((v) => v <= 0);

  for (let i = 1; i < discount.length - 9; i++) {
    const before = discount[i - 1];
    const next = discount[i + 9];

    if (wantList.has(before)) {
      cart.set(before, (cart.get(before) || 0) + 1);
    }

    if (wantList.has(next)) {
      cart.set(next, cart.get(next) - 1);
    }

    answer += +Array.from(cart.values()).every((v) => v <= 0);
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
