// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  const rb = [park.length - 1, park[0].length - 1];
  let cp = [];
  const xs = {};

  park.forEach((row, i) => {
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 'S') {
        cp = [i, j];
      }

      if (row[j] === 'X') {
        xs[`${i} ${j}`] = 1;
      }
    }
  });

  routes.forEach((o) => {
    const [d, n] = o.split(' ');
    let np = cp;
    for (let i = 0; i < +n; i++) {
      if (d === 'E') {
        np = [np[0], np[1] + 1];
      }
      if (d === 'W') {
        np = [np[0], np[1] - 1];
      }
      if (d === 'S') {
        np = [np[0] + 1, np[1]];
      }
      if (d === 'N') {
        np = [np[0] - 1, np[1]];
      }

      if (xs[`${np[0]} ${np[1]}`]) {
        np = null;
        return;
      }
      if (np[0] < 0 || np[1] < 0 || np[0] > rb[0] || np[1] > rb[1]) {
        np = null;
        return;
      }
    }

    if (np) {
      cp = np;
    }
  });

  return cp;
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1'])); // 	[2,1]
