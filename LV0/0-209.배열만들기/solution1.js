// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  const result = [];
    
  const start = l % 5 === 0 ? l : l + (5 - l % 5);
    
  for (let i = start; i <= r; i += 5) {
    if (!/[12346789]/.test(String(i))) {
      result.push(i);
    }
  }
  
  return result.length === 0 ? [-1] : result;
}

console.log(solution(5, 555)); //	[5, 50, 55, 500, 505, 550, 555]
