// https://school.programmers.co.kr/learn/courses/30/lessons/62048

// 대각선이 격자점을 교차하는 횟수는 W와 H의 최대공약수(Greatest Common Divisor, GCD)와 관련이 있습니다. 왜냐하면 대각선은 각 W/G와 H/G 간격으로 격자점을 지나가게 되며, 이것이 G번 반복되기 때문입니다. 여기서 G는 W와 H의 최대공약수입니다.

// 대각선이 격자점을 교차할 때마다, 두 개의 격자칸이 사용할 수 없게 됩니다. 하지만 이러한 격자점의 각 줄의 시작과 끝에서는 하나의 격자칸만이 영향을 받습니다. 따라서, 사용할 수 없는 정사각형의 수는  W + H − G가 됩니다.


function solution(w, h) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  const G = gcd(w, h);
  return w * h - (w + h - G);
}


console.log(solution(8, 12)); // 80
