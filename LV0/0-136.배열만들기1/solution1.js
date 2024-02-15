// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if(i % k === 0){
      answer.push(i);
    }
  }
  return answer;
}

// function solution(n, k) {
//     var answer = [];
//     for(let i = k ; i <= n; i+=k){
//         answer.push(i)
//     }
//     return answer;
// }

console.log(solution(15, 5)); // [5, 10, 15]
