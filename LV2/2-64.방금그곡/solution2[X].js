// https://school.programmers.co.kr/learn/courses/30/lessons/17683
function stringToScore(s) {
  let isSharp = false;

  const score = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      isSharp = true;
      continue;
    }

    if (isSharp) {
      score.push(s[i] + '#');
      isSharp = false;
    } else {
      score.push(s[i]);
    }
  }

  return score.reverse();
}

function calcTimeDiff(startTime, endTime) {
  const start = startTime.split(':');
  const end = endTime.split(':');

  const startMinutes = start[0] * 60 + start[1];
  const endMinutes = end[0] * 60 + end[1];

  return endMinutes - startMinutes;
}

function isMatch(a, b) {
  let indexInA = -1;
  for (let element of b) {
    indexInA = a.indexOf(element, indexInA + 1);
    if (indexInA === -1) return false;
  }
  return true;
}

function solution(m, musicinfos) {
  const myScore = stringToScore(m);
  const target = { title: '', playTime: 0 };

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, scoreString] = musicinfos[i].split(',');
    const score = stringToScore(scoreString);
    const playTime = calcTimeDiff(start, end);

    if (playTime < myScore.length) continue;
    
    const repeat = Math.floor(playTime / score.length);
    const rest = playTime % score.length;
    let playScore = [];

    for (let i = 0; i < repeat; i++) {
      playScore = [...playScore, ...score];
    }

    playScore = [...playScore, ...score.slice(0, rest)];
    if (isMatch(playScore, myScore) && target.playTime < playTime) {
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
