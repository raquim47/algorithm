// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
  const map = gifts.reduce((acc, cur) => {
    const [transmit, receive] = cur.split(' ');
    if (!acc[transmit])
      acc[transmit] = { transmit: { _total: 0 }, receive: { _total: 0 } };
    if (!acc[receive])
      acc[receive] = { transmit: { _total: 0 }, receive: { _total: 0 } };

    acc[transmit].transmit[receive] =
      (acc[transmit].transmit[receive] || 0) + 1;
    acc[transmit].transmit._total += 1;

    acc[receive].receive[transmit] = (acc[receive].receive[transmit] || 0) + 1;
    acc[receive].receive._total += 1;
    return acc;
  }, {});

  let max = 0;
  friends.forEach((person) => {
    if (!map[person]) map[person] = { transmit: { _total: 0 }, receive: { _total: 0 } };
    let gift = 0;
    
    friends.forEach((other) => {
      if (person !== other) {
        if (!map[other]) map[other] = { transmit: { _total: 0 }, receive: { _total: 0 } };
        if (
          (map[person].transmit[other] || 0) >
          (map[other].transmit[person] || 0)
        ) {
          gift++;
        } else if (
          (map[person].transmit[other] || 0) ===
          (map[other].transmit[person] || 0)
        ) {
          const pScore = map[person].transmit._total - map[person].receive._total;
          const oScore = map[other].transmit._total - map[other].receive._total;
          if (pScore > oScore) {
            gift++;
          }
        }
      }
    });
    max = Math.max(max, gift);
  });
  return max;
}

console.log(
  solution(
    ['muzi', 'ryan', 'frodo', 'neo'],
    [
      'muzi frodo',
      'muzi frodo',
      'ryan muzi',
      'ryan muzi',
      'ryan muzi',
      'frodo muzi',
      'frodo ryan',
      'neo muzi',
    ]
  )
); // 	2
