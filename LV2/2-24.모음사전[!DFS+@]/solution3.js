// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let found = false;

  const stack = [{ word: '', depth: 0 }];

  while (stack.length > 0 && !found) {
    const { word: currentWord, depth } = stack.pop();
    console.log(currentWord, depth, stack);
    // 찾는 단어를 만났을 때 카운트 반환
    if (currentWord === word) {
      found = true;
      break;
    }

    // 최대 깊이에 도달하지 않았다면 자식 노드 생성
    if (depth < 5) {
      for (let i = vowels.length - 1; i >= 0; i--) {
        stack.push({ word: currentWord + vowels[i], depth: depth + 1 });
      }
    }

    // 스택에서 원소를 하나 꺼낼 때마다 카운트 증가
    count++;
  }

  return count;
}

console.log(solution('AAAE')); // 10
