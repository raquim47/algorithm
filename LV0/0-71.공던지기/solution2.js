// https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript

// 1. k번 동작을 반복한다
// 2. 공을 다음으로 넘긴다 += 2
// 3. 한바뀌를 돌면 numbers.length로 나눈다
function solution(numbers, k) {
  // [1, 2, 3, 4]1   3   1  3
  // next ->  0     2    4   6   8  10
  // 4로 나눈
  // 나머지 ->  0     2    0   2   0  2
  //      [1, 2, 3]   2  1
  // 3 나눈 0     2    4  6
  // 나머지  0     2   1   0
  let next = 0;
  for (let i = 1; i < k; i++) {
    next += 2;
    next %= numbers.length;
  }
  return numbers[next];
}

console.log(solution([1, 2, 3, 4], 2)); //3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); //	3
console.log(solution([1, 2, 3], 3)); //	2
