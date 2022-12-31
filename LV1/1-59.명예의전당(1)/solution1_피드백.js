// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

// score의 배열을 하나씩 꺼내서 arr 에 옮겨 닮는다
// 담을때마다 arr를 내림차순으로 정렬한다. 
// (오름차순으로 정렬하면 k개를 잘랐을 때 가장 큰 수부터 자르기가 어렵다)

function solution(k, score) {
  const arr = [];
  const result = [];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    const sortedArr = arr.slice().sort((a, b) => b - a);
    const slicedArr = sortedArr.slice(0, k);
    result.push(slicedArr[slicedArr.length - 1]);
  }

  return result;
}


console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); //	[10, 10, 10, 20, 20, 100, 100]
// console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); //	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
