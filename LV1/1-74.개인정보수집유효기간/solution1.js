// https://school.programmers.co.kr/learn/courses/30/lessons/150370

const getDate = (str) => {
  return new Date(str.replace(/\./g, '-'));
};

const isExpired = (term, start, end) => {
  const diffMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  console.log(diffMonths, start.getDate(), end.getDate());
  return term === diffMonths
    ? start.getDate() <= end.getDate()
    : term < diffMonths;
};

function solution(todayStr, terms, privacies) {
  const today = getDate(todayStr);
  const map = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(' ');
    acc[key] = Number(value);
    return acc;
  }, {});
  return privacies.reduce((acc, cur, i) => {
    const [date, term] = cur.split(' ');
    const startDay = getDate(date);
    return isExpired(map[term], startDay, today) ? [...acc, i + 1] : acc;
  }, []);
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
  )
); // [1, 3]
