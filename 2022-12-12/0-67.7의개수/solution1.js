// https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript

// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const str = array[i] + "";
    for (let j = 0; j < str.length; j++) {
      if (str[j] == 7) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution([7, 77, 17])); //4
console.log(solution([10, 29])); //0
