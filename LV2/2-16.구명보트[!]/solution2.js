// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }
  return boats;
}


console.log(solution([70, 50, 80, 50, 10], 100)); // 3
