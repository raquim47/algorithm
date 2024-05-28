// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    // if (left == right) {
    //   boats++;
    //   break;
    // }
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }
  return boats;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
