// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const userMap = new Map();
  const answer = [];
  const textMap = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  for (const log of record) {
    const [action, uid, name] = log.split(' ');
    if (name) {
      userMap.set(uid, name);
    }
    if (action !== 'Change') {
      answer.push({ uid, action });
    }
  }
  return answer.map(
    ({ uid, action }) => `${userMap.get(uid)}${textMap[action]}`
  );
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
); // 	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
