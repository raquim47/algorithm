// flatten이라는 이름의 재귀 함수를 작성하세요. 이 함수는 배열의 배열을 인수로 받아들이고, 모든 값을 평평하게 만든 새 배열을 반환해야 합니다.

// My Code 해결못함 ㅜ
function flatten(arr) {
  let result = [];
  function inner(arr) {
    if (arr[0].length === 1) {
      result.push(arr[0]);
      inner(arr.slice(1));
    } else {
    }
  }
  inner(arr);
  return result;
}
// answer
function flatten2(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten2(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten2([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
