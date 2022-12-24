// https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  const score = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };
  let min = 0;
  let unknown = 0;
  
  for (let i = 0; i < lottos.length; i++) {
    if(lottos[i] === 0){
      unknown += 1;
    } else {
      for (let j = 0; j < win_nums.length; j++) {
        if(lottos[i] === win_nums[j]){
          min += 1;
        }
      }
    }
  }
  return [score[min+ unknown] , score[min]]
}

// console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
// console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
