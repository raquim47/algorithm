// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let answer = 0;

  (function recursive(stemina, remains, count = 0) {
    if (!remains.length && count > answer) {
      answer = count;
    }

    for (let i = 0; i < remains.length; i++) {
      const [required, consumed] = remains[i];
      if (stemina >= required) {
        recursive(
          stemina - consumed,
          remains.slice(0, i).concat(remains.slice(i + 1)),
          count + 1
        );
      } else if (count > answer) {
        answer = count;
      }
    }
  })(k, dungeons);

  return answer;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
