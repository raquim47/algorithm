// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let num = Infinity ;
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if(arr[j] > queries[i][2] && arr[j] < num){
        num = arr[j];
      }
    }
    result[i] = num === Infinity ? -1 : num;
  }
  return result;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); //	[3, 4, -1]
