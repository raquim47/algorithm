// capitalizeWords라는 재귀 함수를 작성하라. 단어의 배열이 주어지면, 각 단어를 대문자로 변환한 새 배열을 반환하라.

// answer
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(['car', 'taco', 'banana'])); // ['CAR','TACO','BANANA']
