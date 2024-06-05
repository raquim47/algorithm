// https://school.programmers.co.kr/learn/courses/30/lessons/17683

// replace() 메서드는 기본적으로 문자열에서 첫 번째 일치하는 요소만을 대체합니다. 따라서, 문자열 내에서 특정 패턴을 전부 바꾸고 싶을 경우 정규 표현식을 사용하고, 이 때 전역 플래그 (g)를 사용하여 모든 일치 항목을 대체하도록 해야 합니다.

function replaceScore(s) {
  return s
    .replace(/A#/g, 'a')
    .replace(/B#/g, 'b')
    .replace(/C#/g, 'c')
    .replace(/D#/g, 'd')
    .replace(/F#/g, 'f')
    .replace(/G#/g, 'g');
}

function calcTimeDiff(startTime, endTime) {
  const [startH, startM] = startTime.split(':').map(Number);
  const [endH, endM] = endTime.split(':').map(Number);
  return endH * 60 + endM - (startH * 60 + startM);
}

function solution(m, musicinfos) {
  let target = { title: '(None)', playTime: 0 };
  const myScore = replaceScore(m);
  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, scoreString] = musicinfos[i].split(',');
    const score = replaceScore(scoreString);
    const playTime = calcTimeDiff(start, end);

    if (playTime < myScore.length) continue;

    const playScore =
      score.repeat(Math.floor(playTime / score.length)) +
      score.slice(0, playTime % score.length);
    
    if (playScore.includes(myScore) && playTime > target.playTime) {
      target = { title, playTime };
    }
  }

  return target.title;
}

// console.log(
//   solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "HELLO"

console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
); // "FOO"

// console.log(
//   solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "WORLD"
