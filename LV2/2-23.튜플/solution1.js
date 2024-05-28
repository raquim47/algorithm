// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const answer = [];
  const map = {};
  let length = 0;
  let el = '';

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '{') continue;

    if (s[i] === ',') {
      map[el] = (map[el] || 0) + 1;
      el = '';
    } else if (s[i] === '}') {
      length++;
      if(i === s.length -2){
        map[el] = (map[el] || 0) + 1;
      }
    } else {
      el += s[i];
    }
  }
  for (const key in map) {
    answer[length - map[key]] = +key;
  }
  return answer;
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
// console.log(solution('{{123}}')); // [2, 1, 3, 4]
