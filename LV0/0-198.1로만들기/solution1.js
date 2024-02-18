// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
  return num_list.reduce((acc, cur) => {
    let num = cur;
    let count = 0;
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
      count++;
    }
    return acc + count;
  }, 0);
}

console.log(solution([12, 4, 15, 1, 14])); //	11
