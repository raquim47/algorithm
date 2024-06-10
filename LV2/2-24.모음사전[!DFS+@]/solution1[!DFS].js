// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let found = false;
  let count = 0;

  // dfs(0, '');
  // dfs(1, 'A'); dfs(2, 'AA'); dfs(3, 'AAA'); dfs(4, 'AAAA'); dfs(5, 'AAAAA');
  function dfs(depth, currentWord) {
    if (currentWord === word) {
      found = true;
    }

    if (depth == 5 || found) return;

    for (let i = 0; i < 5; i++) {
      if (found) break;
      dfs(depth + 1, currentWord + vowels[i]);
      count++;
    }
  }

  dfs(0, '');

  return count;
}


console.log(solution('AAAE')); // 10