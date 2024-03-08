// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
  const arr = my_string.split('');
  for (let i = 0; i < queries.length; i++) {
    const [q1, q2] = queries[i];
    for (let j = 0; j < Math.ceil((q2 - q1) / 2); j++) {
      [arr[q1 + j], arr[q2 - j]] = [arr[q2 - j], arr[q1 + j]];
    }
  }
  return arr.join('');
}

console.log(
  solution('rermgorpsam', [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); //"programmers"