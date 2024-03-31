// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const positions = players.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});
  callings.forEach((curr) => {
    const currIdx = positions[curr];
    const front = players[currIdx - 1];
    
    players[currIdx - 1] = curr;
    players[currIdx] = front;

    positions[curr] = currIdx - 1;
    positions[front] = currIdx;
  });
  return players;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
); // 	["mumu", "kai", "mine", "soe", "poe"]
