// https://school.programmers.co.kr/learn/courses/30/lessons/118667

// 두 큐의 시작 인덱스를 0으로 초기화하고, 각 큐의 끝을 가리키는 인덱스도 관리합니다. 그리고 두 큐의 합을 각각 관리하면서 목표 합과 비교합니다. 이 모든 작업은 하나의 배열로 시뮬레이션하는 것이 아니라, 두 개의 독립된 배열을 그대로 사용하면서 인덱스 조작만으로 처리합니다.

function solution(queue1, queue2) {
  const combinedQueue = queue1.concat(queue2);
  const totalSum = combinedQueue.reduce((acc, x) => acc + x, 0);
  if (totalSum % 2 !== 0) return -1;
  const target = totalSum / 2;

  let currentSum = queue1.reduce((acc, x) => acc + x, 0);
  let operations = 0;
  let index1 = 0;
  let index2 = 0;
  let size = queue1.length;

  while (index1 < size * 2 && index2 < size * 2) {
    if (currentSum === target) return operations;

    if (currentSum < target) {
      currentSum += combinedQueue[size + index2];
      index2++;
    } else {
      currentSum -= combinedQueue[index1];
      index1++;
    }
    operations++;
  }

  return -1;
}

// console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 	2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 	7
