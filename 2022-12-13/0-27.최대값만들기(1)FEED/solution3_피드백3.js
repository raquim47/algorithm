// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function maxValueRemove(arr) {
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    if (value < arr[i]) {
      value = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      arr[i] = -1;
    }
  }

  return value;
}

function solution(numbers) {
  let maxNum = maxValueRemove(numbers);
  let maxNum2 = maxValueRemove(numbers);

  return maxNum * maxNum2;
}

console.log(solution([1, 2, 3, 4, 5])); // 20
// console.log(solution([0, 31, 24, 10, 1, 9])); // 744
