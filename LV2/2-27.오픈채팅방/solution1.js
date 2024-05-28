// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const noticeMap = {};
  let index = 0;

  for (let i = 0; i < record.length; i++) {
    const [action, uid, name] = record[i].split(' ');
    if (!noticeMap[uid]) {
      noticeMap[uid] = { name: '', messages: [] };
    }
    if (action === 'Enter' || action === 'Change') {
      noticeMap[uid].name = name;
    }

    if (action === 'Enter' || action === 'Leave') {
      const translated = action === 'Enter' ? '들어왔습니다.' : '나갔습니다.';
      noticeMap[uid].messages.push({ index, action: translated });
      index++;
    }
  }
  const answer = [];

  for (const uid in noticeMap) {
    for (const { index, action } of noticeMap[uid].messages) {
      answer[index] = `${noticeMap[uid].name}님이 ${action}`;
    }
  }
  return answer;
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

