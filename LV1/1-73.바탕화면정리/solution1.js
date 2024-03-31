// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(w) {
  const answer = [50, 50, 0, 0];
  for (let i = 0; i < w.length; i++) {
    const s = w[i];
    for (let j = 0; j < s.length; j++) {
      if (s[j] === '#') {
        if (i < answer[0]) {
          answer[0] = i;
        }
        if (j < answer[1]) {
          answer[1] = j;
        }
        if (i + 1 > answer[2]) {
          answer[2] = i + 1;
        }
        if (j + 1 > answer[3]) {
          answer[3] = j + 1;
        }
      }
    }
  }
  return answer;
}

console.log(solution(['.#...', '..#..', '...#.'])); // [0, 1, 3, 4]
