// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
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
        numbers[i] = -1;
        break;
      }
    }
    // 최대값 초기화
    maxNum = 0;
  }

  return arr[0] * arr[1];
}

console.log(solution([1, 2, 3, 4, 5])); // 20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
