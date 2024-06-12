// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  let maxDungeons = 0;

  (function exploreDungeons(stamina, dungeonsLeft, count = 0) {
    maxDungeons = Math.max(maxDungeons, count);
    for (let i = 0; i < dungeonsLeft.length; i++) {
      const [minStamina, useStamina] = dungeonsLeft[i];
      if (stamina >= minStamina) {
        const nextDungeons = dungeonsLeft
          .slice(0, i)
          .concat(dungeonsLeft.slice(i + 1));
        exploreDungeons(stamina - useStamina, nextDungeons, count + 1);
      }
    }
  })(k, dungeons);

  return maxDungeons;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
