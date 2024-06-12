// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let results = [];
  let answer = -1

  (function recursive(arr, memo = []) {
    if (arr.length === 0) {
      results.push(memo);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      recursive(remaining, memo.concat([curr]));
    }
  })(dungeons);

  return results;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
