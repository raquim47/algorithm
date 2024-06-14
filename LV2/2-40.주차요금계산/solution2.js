// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const [baseT, baseF, unitT, unitF] = fees;
  const recordsMap = new Map();

  function timeToMinute(time) {
    const [hour, minute] = time.split(':');
    return hour * 60 + +minute;
  }

  records.forEach((record) => {
    const [time, carNumber, action] = record.split(' ');
    const currentTime = timeToMinute(time);
    const sign = action === 'IN' ? -1 : 1;

    recordsMap.set(
      carNumber,
      (recordsMap.get(carNumber) || 0) + currentTime * sign
    );
  });

  const closingTime = timeToMinute('23:59');

  // Array.from 메서드로 Map에서 배열을 만들고, 차량 번호로 정렬
  return Array.from(recordsMap)
    .sort()
    .map(([_, minutes]) => {
      if (minutes <= 0) minutes += closingTime; // 출차 기록이 없는 경우 처리

      const totalMinutes = Math.max(0, minutes);
      const extraMinutes = Math.max(0, totalMinutes - baseT);
      const extraCharge = Math.ceil(extraMinutes / unitT) * unitF;
      return baseF + (extraMinutes > 0 ? extraCharge : 0);
    });
}

console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // 	[14841]
