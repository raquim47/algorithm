// https://school.programmers.co.kr/learn/courses/30/lessons/250137
// [시전 시간, 초당 회복량, 추가 회복량]
function solution(bandage, health, attacks) {
  const attackMap = attacks.reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
  const [duration, heal, bonus] = bandage;
  let hp = health;
  let hCount = 0;

  for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
    if (attackMap[i]) {
      hCount = 0;
      hp -= attackMap[i];
      if (hp <= 0) {
        return -1;
      }
    } else {
      hCount++;
      hp = Math.min(hp + heal, health);
      if (duration === hCount) {
        hp = Math.min(hp + bonus, health);
        hCount = 0;
      }
    }
  }
  return hp;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
); // 	5
