// https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript

// 1. 2차원배열의 크기를 확인 board.length * board[0].length
// 2. 지뢰의 위치를 새 배열 arr에 담는다
// 3. 지뢰 좌표를 통해 주변 좌표를 얻어서 arr2에 담는다
// 4. arr2의 좌표 배열 [x, y]를 숫자형태로 바꿔서 arr3에 담는다
// 5. arr3의 중복을 제거한다
// 6. board.length * board[0].length - arr3.length
function solution(board) {
  let arr = [];
  let arrIndex = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        arr[arrIndex] = [i, j];
        arrIndex++;
      }
    }
  }
  let arr2 = [];
  [1, 2] // 2,2
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > 0 && arr[i][1] > 0) arr2.push([arr[i][0] - 1, arr[i][1] - 1]); // X
    if (arr[i][0] > 0) arr2.push([arr[i][0] - 1, arr[i][1]]); //x
    if (arr[i][0] > 0 && arr[i][1] < board[0].length - 1) arr2.push([arr[i][0] - 1, arr[i][1] + 1]); //x

    if (arr[i][1] > 0) arr2.push([arr[i][0], arr[i][1] - 1]); // 0, 0
    arr2.push([arr[i][0], arr[i][1]]); // 0, 1
    if (arr[i][1] < board[0].length - 1) arr2.push([arr[i][0], arr[i][1] + 1]);//x

    if (arr[i][0] < board.length - 1 && arr[i][1] > 0)
      arr2.push([arr[i][0] + 1, arr[i][1] - 1]);
    if (arr[i][0] < board.length - 1) arr2.push([arr[i][0] + 1, arr[i][1]]);
    if (arr[i][0] < board.length - 1 && arr[i][1] < board[0].length - 1)
      arr2.push([arr[i][0] + 1, arr[i][1] + 1]);
  }

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    arr3[i] = arr2[i][0] * 10 + arr2[i][1];
  }

  let arr4 = [];
  let arr4Index = 0;

  for (let i = 0; i < arr3.length; i++) {
    let confirm = true;
    for (let j = 0; j < arr4.length; j++) {
      if (arr3[i] === arr4[j]) {
        confirm = false;
        break;
      }
    }
    if (confirm) {
      arr4[arr4Index] = arr3[i];
      arr4Index++;
    }
  }
  return board.length * board[0].length - arr4.length;
}
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 0
console.log(
  solution([
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ])
);// 3
