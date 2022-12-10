// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript

// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// ✼ Array.prototype.splice()
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// deleteCount(Optional)
// 배열에서 제거할 요소의 수입니다. deleteCount를 생략하거나 값이 array.length - start보다 크면 start부터의 모든 요소를 제거합니다. deleteCount가 0 이하라면 어떤 요소도 제거하지 않습니다. 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.

// Q. start가 음수일때 deleteCount는????????????
function solution(num_list) {
  let arr = [];
  while (num_list.length > 0) {
    arr.push(...num_list.splice(-1));
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); //[5, 3, 1, 1, 1, 0, 1]
