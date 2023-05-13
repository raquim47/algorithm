// stringifyNumbers라는 함수를 작성하라. 이 함수는 객체를 입력으로 받아 그 안의 모든 숫자 값을 찾아 문자열로 변환해야 한다. 이 문제를 해결하는 데에는 재귀가 아주 유용하게 사용될 것이다!

// answer
function stringifyNumbers(obj){
  const newObj = {};
  for (const key in obj) {
    const val = obj[key]
    if(typeof val === 'number'){
      newObj[key] = val.toString();
    } else if (typeof val === 'object' && !Array.isArray(val)){
      newObj[key] = stringifyNumbers(val);
    } else {
      newObj[key] = val;
    }
  }
  return newObj;
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
