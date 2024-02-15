// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    const arr1Acc = arr1.reduce((a, b) => a + b);
    const arr2Acc = arr2.reduce((a, b) => a + b);
    return arr1Acc > arr2Acc ? 1 : arr1Acc < arr2Acc ? -1 : 0;
  }
}
console.log(solution([49, 13], [70, 11, 2])); // -1
