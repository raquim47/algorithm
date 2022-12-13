// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// newArr = [...array, n]
// 오름차순으로 정렬
// n을 찾고
// n의 인덱스가 0이면 newArr[1]
// 아니면 newArr[n의인덱스]의 양옆

function solution(array, n) {
  const mixArr = [...array, n];
  // 오름차순 정렬
  let arrangeArr = [];
  let idx = 0;
  for (let i = 0; i <= 100; i++) {
    for (let j = 0; j < mixArr.length; j++) {
      if (i === mixArr[j]) {
        arrangeArr[idx] = mixArr[j];
        idx++;
      }
    }
  }
  let findIdx;
  for (let i = 0; i < arrangeArr.length; i++) {
    if (arrangeArr[i] === n) {
      findIdx = i;
      // 중복이 있을 수 있기 때문에 break하면 안됌.
    }
  }
  const before = arrangeArr[findIdx - 1];
  const current = arrangeArr[findIdx];
  const after = arrangeArr[findIdx + 1];
  if (findIdx === 0) {
    return after;
  } else {

    if (Math.abs(before - current) > Math.abs(after - current)) {
      return after;
    } else if (Math.abs(before - current) < Math.abs(after - current)) {
      return before;
    } else { // Math.abs(before - current) === Math.abs(after - current)
      return before;
    }

  }
}

console.log(solution([3, 10, 28], 20)); //28
console.log(solution([10, 11, 12], 13)); //12
