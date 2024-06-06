// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function convertTime(startTime, endTime) {
  const [startH, startM] = startTime.split(':').map(Number);
  const [endH, endM] = endTime.split(':').map(Number);
  const start = startH * 60 + startM;
  const diff = endH * 60 + endM - start;

  return [start, diff]; // [시작시간(분), 소요시간]
}

function solution(book_time) {
  const timeMap = book_time
    .map(([start, end]) => convertTime(start, end))
    .sort((a, b) => a[0] - b[0]);

  let answer = 1;
  const stack = [-1];

  for (const book of timeMap) {
    const [start, duration] = book;
    const poped = stack[stack.length - 1];
    if (poped <= start) {
      stack.pop();
    }
    stack.push(start + duration);
    stack.sort((a, b) => b - a);
    if (stack.length > answer) answer = stack.length;
  }
  return answer;
}

console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ])
); // 3
