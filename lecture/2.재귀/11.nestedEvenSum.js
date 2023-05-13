// nestedEvenSum이라는 재귀 함수를 작성하라. 중첩 객체를 포함할 수 있는 객체 안의 모든 짝수의 합을 반환하라.

function nestedEvenSum(obj) {
  let result = 0;
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'number') {
      if (value % 2 === 0) {
        result += value;
      }
    } else if (value !== null && typeof value === 'object') {
      result += nestedEvenSum(value);
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
