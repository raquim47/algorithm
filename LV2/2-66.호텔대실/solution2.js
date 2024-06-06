// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  const events = [];
  book_time.forEach(([start, end]) => {
    const startMin =
      parseInt(start.split(':')[0]) * 60 + parseInt(start.split(':')[1]);
    const endMin =
      parseInt(end.split(':')[0]) * 60 + parseInt(end.split(':')[1]) + 10;
    events.push([startMin, 'start']);
    events.push([endMin, 'end']);
  });

  events.sort((a, b) => a[0] - b[0] || (a[1] === 'end' ? -1 : 1));

  let maxRooms = 0,
    currentRooms = 0;
  events.forEach(([_, type]) => {
    if (type === 'start') currentRooms++;
    else currentRooms--;
    maxRooms = Math.max(maxRooms, currentRooms);
  });

  return maxRooms;
}

console.log(
  solution([
    ['09:10', '10:10'],
    ['10:20', '12:20'],
  ])
); // 1
