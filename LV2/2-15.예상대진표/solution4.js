// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b, count = 1) {
  if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
    return count;
  } else {
    return solution(n, a / 2, b / 2, count + 1);
  }
}

console.log(solution(8, 4, 7)); // 		3
//        1
//    1       2
//  1   2   3   4
// 1 2 3 4 5 6 7 8
