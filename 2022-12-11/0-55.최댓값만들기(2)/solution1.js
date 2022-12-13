// https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  // 내림차순 정렬 
  let arr = [];
  let maxNum = 0;
  for (let j = 0; j < numbers.length; j++) {
    // 최대값 찾기
    for (let i = 0; i < numbers.length; i++) {
      if (maxNum < numbers[i]) {
        maxNum = numbers[i];
      }
    }
    // 새 배열에 넣기
    arr[j] = maxNum;
    // 배열에서 최대값 지우기
    for (let i = 0; i < numbers.length; i++) {
      if (maxNum === numbers[i]) {
        numbers[i] = -10001;
        break;
      }
    }
    // 최대값 초기화
    maxNum = -10001;
  }
  // 배열의 앞에 두 개, 뒤에 두 개 비교
  const front = arr[0] * arr[1];
  const back = arr[arr.length-1] * arr[arr.length-2];
  console.log(arr);
  if(front > back){
    return front;
  } else {
    return back;
  }
}

console.log(solution([1, 2, -3, 4, -5])); //	15
console.log(solution([0, -31, 24, 10, 1, 9])); //240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); //600
