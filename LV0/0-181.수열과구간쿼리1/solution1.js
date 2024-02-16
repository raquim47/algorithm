// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      arr[j] += 1;
    }
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
); //		[1, 3, 4, 4, 4]
