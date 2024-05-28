// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function timeToMinute(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function solution(fees, records) {
  const recordsMap = new Map();
  const [baseT, baseF, unitT, unitF] = fees;

  const result = [];

  for (let i = 0; i < records.length; i++) {
    const [time, carNumber, action] = records[i].split(' ');
    if (!recordsMap.has(carNumber)) {
      recordsMap.set(carNumber, { time, action, acc: 0 });
      result.push(carNumber);
    } else {
      const { time: prevTime, acc: prevAcc } = recordsMap.get(carNumber);
      if (action === 'OUT') {
        const minutes = timeToMinute(time) - timeToMinute(prevTime);
        recordsMap.set(carNumber, { time, action, acc: prevAcc + minutes });
      } else {
        recordsMap.set(carNumber, { time, action, acc: prevAcc });
      }
    }
  }
  result.sort((a, b) => a - b);
  return result.map((carNumber) => {
    const { acc, action, time } = recordsMap.get(carNumber);
    const extraTime =
      acc -
      baseT +
      (action === 'IN' ? timeToMinute('23:59') - timeToMinute(time) : 0);
    return baseF + (extraTime > 0 ? Math.ceil(extraTime / unitT) * unitF : 0);
  });
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
); // [14600, 34400, 5000]
