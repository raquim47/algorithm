// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  const map = name.reduce((obj, key, i) => {
    obj[key] = yearning[i];
    return obj;
  }, {});

  return photo.map((v) => v.reduce((p, c) => p + (map[c] ?? 0), 0));
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
); // [19, 15, 6]
