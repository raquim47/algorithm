// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;
  const discountMap = new Map();

  function isValid() {
    for (let k = 0; k < want.length; k++) {
      const quantity = discountMap.get(want[k]);
      if (!quantity || quantity < number[k]) return false;
    }

    return true;
  }

  for (let i = 0; i < 10; i++) {
    discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
  }
  if (isValid()) answer++;

  for (let i = 1; i < discount.length - 1; i++) {
    const back = discount[i - 1];
    const front = discount[i + 9];
    discountMap.get(back) < 2
      ? discountMap.delete(back)
      : discountMap.set(back, discountMap.get(back) - 1);
    discountMap.set(front, (discountMap.get(front) || 0) + 1);
    if (isValid()) answer++;
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
