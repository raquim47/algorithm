// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  const hash = {};
  [a, b, c, d].forEach((num) => {
    hash[num] = (hash[num] || 0) + 1;
  });

  const keys = Object.keys(hash).map(Number);
  const values = Object.values(hash);

  if (values.includes(4)) {
    return 1111 * keys[0];
  }

  if (values.includes(3)) {
    const p = parseInt(keys.find(key => hash[key] === 3), 10);
    const q = parseInt(keys.find(key => hash[key] === 1), 10);
    return Math.pow(10 * p + q, 2);
  }

  if (values.length === 2 && values.every(val => val === 2)) {
    return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
  }

  if (values.includes(2) && values.length === 3) {
    const p = keys.find(key => hash[key] === 2);
    const [q, r] = keys.filter(key => hash[key] === 1);
    return q * r;
  }

  return Math.min(...keys);
}

console.log(solution(4, 1, 4, 4)); // 	1681
