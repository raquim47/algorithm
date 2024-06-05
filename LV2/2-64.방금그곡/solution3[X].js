// https://school.programmers.co.kr/learn/courses/30/lessons/17683
function stringToScore(s) {
  const score = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === '#') {
      score.push(s[i] + '#');
      i++; // 다음 문자는 '#'이므로 건너뜁니다.
    } else {
      score.push(s[i]);
    }
  }
  return score;
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
  let target = { title: '(None)', playTime: 0 };
  const sharpCount = m.split('#').length - 1;
  const myScoreLength = m.length - sharpCount;

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, score] = musicinfos[i].split(',');
    const playTime = calcTimeDiff(start, end);

    if (playTime < myScoreLength) continue;

    let idx = 0;
    let currentTime = 0;
    while (currentTime < playTime) {
      const curr = score[idx % score.length];
      const next = score[(idx + 1) % score.length];
      if (curr !== '#') {
        const candidate = curr + (next === '#' ? '#' : '');
        if(compareM.startWith(candidate)){

        }
        currentTime++;
      }
      idx++;
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

// console.log(
//   solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
// ); // "WORLD"
console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB'])); // "WORLD"
