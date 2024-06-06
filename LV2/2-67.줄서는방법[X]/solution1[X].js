// https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
  const arr = Array(n)
    .fill()
    .map((_, i) => i + 1);
  
  const q = Math.floor(k / (n - 1));
  const r = k % (n - 1);

  const queue = [[3]]

  for (let i = 0; i < n; i++) {
    const sliced = arr.slice();
    const spliced = sliced.splice(i, 1);
    console.log(sliced);
    let visited = {};
    let depth = 0;
    const answer = [];
  }
}

console.log(solution(3, 5)); // [3,1,2]
