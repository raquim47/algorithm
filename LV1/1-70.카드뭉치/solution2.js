// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[idx1]) {
      idx1++;
    } else if (goal[i] === cards2[idx2]) {
      idx2++;
    } else {
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
