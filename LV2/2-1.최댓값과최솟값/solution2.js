function solution(s) {
  let min = Infinity, max = -Infinity;

  s.split(' ').forEach(v => {
    const num = +v;
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return `${min} ${max}`;
}

console.log(solution('-1 -2 -3 -4')); // "-4 -1"
