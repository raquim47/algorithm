// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let mid = n / 2;
  if ((a <= mid && b > mid) || (a > mid && b <= mid)) {
    // console.log('mid', mid, a , b)
    return Math.log2(n);
  } else {
    if (a <= mid && b <= mid) {
      console.log(mid, a, b);
      // return solution(2, 2, 1)
      return solution(mid, a, b);
    } else {
      // return solution(8, 6, 5)
      // return solution(4, 2, 1)
      return solution(mid, a - mid, b - mid);
    }
  }
}
console.log(solution(16, 14, 13)); // 	1
