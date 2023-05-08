// 이진 탐색

// 정렬된 정수 배열을 인자로 받는 search라는 함수를 작성하세요. 이 함수는 값을 입력받아 함수에 전달된 값이 위치한 인덱스를 반환합니다. 만약 값을 찾지 못하면, -1을 반환하세요.

// Naive Solution
// O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Refactor
// O(log n)
function search2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currEl = arr[middle];

    if (currEl < val) {
      min = middle + 1;
    } else if (currEl > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
// console.log(search([1, 2, 3, 4, 5, 6], 4)); //3
console.log(search2([1, 2, 3, 4, 5, 6], 6)); //5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1
