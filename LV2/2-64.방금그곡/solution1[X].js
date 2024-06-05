// https://school.programmers.co.kr/learn/courses/30/lessons/17683
function stringToScore(s){

}

function calcTimeDiff(startTime, endTime) {
  const start = startTime.split(':');
  const end = endTime.split(':');

  const startMinutes = start[0] * 60 + start[1];
  const endMinutes = end[0] * 60 + end[1];

  return endMinutes - startMinutes;
}

function solution(m, musicinfos) {
  const target = { title: '', playTime: 0 };

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, score] = musicinfos[i].split(',');
    const playTime = calcTimeDiff(start, end);

    if (playTime < m.length) continue;

    const repeat = Math.floor(playTime / score.length);
    const rest = playTime % score.length;
    let playScore = '';

    for (let i = 0; i < repeat; i++) {
      playScore += score;
    }
    playScore += score.slice(0, rest);
    return playScore;
    if (playScore.includes(m) && target.playTime < playTime) {
      target.title = title;
      target.playTime = playTime;
    }
  }
  return target.title;
}

// console.log(
//   solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "HELLO"

// console.log(
//   solution('CC#BCC#BCC#BCC#B', [
//     '03:00,03:30,FOO,CC#B',
//     '04:00,04:08,BAR,CC#BCC#BCC#B',
//   ])
// ); // "FOO"

console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "WORLD"
