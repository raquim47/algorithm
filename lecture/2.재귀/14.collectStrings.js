// collectStrings라는 함수를 작성하라. 이 함수는 객체를 인자로 받고, 해당 객체 내에서 'string' type를 가진 모든 값을 배열로 반환해야 한다.

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
