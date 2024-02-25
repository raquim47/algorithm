// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
  let mode = false;
  let ret = '';
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '1') {
      mode = !mode;
    } else if (mode !== (i % 2 === 0)) {
      ret += code[i]; // 모드와 인덱스의 홀/짝이 다를 때만 추가
    }
  }
  return ret || 'EMPTY';
}

console.log(solution('abc1abc1abc')); //	"acbac"
