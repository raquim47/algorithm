// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}
// A : [[1, 4], [3, 2], [4, 1]]
// B : [[3, 3], [3, 3]]
// A가 mxn(3x2) 행렬이고 B가 nxp(2x2) 행렬이면 결과 C는 mxp(3x2) 크기를 갖는다.
// 원소 C[i][j]는 A[i][k] x B[k][j] // k는 B의 행의 수만큼 반복
// C[i][j] = A[i][0]*B[0][j] + A[i][1]B[1][j] + ... + A[i][n]*B[n][j]
// C [0][0] : 1*3

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
    [
      [15, 15],
      [15, 15],
      [15, 15],
    ]
  )
); // 3
