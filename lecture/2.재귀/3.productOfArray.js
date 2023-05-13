// productOfArray라는 함수를 작성하세요. 이 함수는 숫자 배열을 입력받아 배열의 모든 요소들의 곱을 반환해야 합니다.

function productOfArray(arr){
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
