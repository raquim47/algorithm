
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  const map = {};
  cards1.forEach((v, i) => (map[v] = ['cards1', i]));
  cards2.forEach((v, i) => (map[v] = ['cards2', i]));

  for (let i = 0; i < goal.length; i++) {
    if (!map[goal[i]]) return 'No';

    if (
      i !== 0 &&
      map[goal[i]][0] === map[goal[i - 1]][0] &&
      map[goal[i]][1] - map[goal[i - 1]][1] !== 1
    ) {
      return 'No';
    }
  }
  return 'Yes';
}

// console.log(
//   solution(
//     ['i', 'drink', 'water'],
//     ['want', 'to'],
//     ['i', 'want', 'to', 'drink', 'water']
//   )
// ); // 	"Yes"

// console.log(
//   solution(
//     ['i', 'water', 'drink'],
//     ['want', 'to'],
//     ['i', 'want', 'to', 'drink', 'water']
//   )
// ); // "No"

console.log(solution(['a', 'b', 'c'], ['d', 'e', 'f'], ['a', 'd', 'f'])); // No
