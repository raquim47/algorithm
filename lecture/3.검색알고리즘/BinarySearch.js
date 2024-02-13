// 이진 검색
// 이진 검색은 분류된 배열을 대상으로만 작동한다. 숫자의 순서, 알파벳 순서 등.
// 시간복잡도 : logN
// 의사 코드
// 1. BinarySearch는 분류된 배열과 찾아야할 값을 인자로 받는다.
// 2. 좌측, 우측 포인터를 만든다.
// 3. 좌측 포인터가 우측 포인터보다 앞에 있는 동안만 연산을 반복
// 4. 좌측, 우측 포인터의 평균 위치값으로 중간점 설정
// 5. 값이 작으면 좌측 포인터를 중간점으로 바꾼다.
// 6. 값이 크면 우측 포인터를 중간점으로 바꾼다.
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pointer = Math.floor((left + right) / 2); // 2

    if (val < arr[pointer]) {
      right = pointer - 1;
    } else if (arr[pointer] < val) {
      left = pointer + 1;
    } else {
      return pointer;
    }
  }
  return -1;
}
console.log(binarySearch([2, 3, 4, 5, 6], 6));
