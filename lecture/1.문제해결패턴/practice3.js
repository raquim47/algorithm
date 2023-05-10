// 연습문제3
// 함수 averagePair를 작성하세요. 정렬된 정수 배열과 목표 평균이 주어지면, 배열 내에서 평균이 목표 평균과 같은 값을 가지는 값들의 쌍이 있는지 확인하세요. 평균 목표와 일치하는 한 쌍 이상이 있을 수 있습니다.

// Bonus: Time - O(n), Space - O(1)

// My Code
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    const average = (arr[left] + arr[right]) / 2;
    if(average < target){
      left++;
    } else if (average > target){
      right--;
    } else {
      return true;
    }
  }
  return false
}


// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false
