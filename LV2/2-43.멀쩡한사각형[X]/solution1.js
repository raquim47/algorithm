// https://school.programmers.co.kr/learn/courses/30/lessons/62048

// 대각선이 격자점을 교차하는 횟수는 W와 H의 최대공약수(Greatest Common Divisor, GCD)와 관련이 있습니다. 왜냐하면 대각선은 각 W/G와 H/G 간격으로 격자점을 지나가게 되며, 이것이 G번 반복되기 때문입니다. 여기서 G는 W와 H의 최대공약수입니다.

function solution(w, h) {
  if (w === h) return w * h - w;

  const min = Math.min(w, h);
  let divisor = 1;
  for (i = 2; i <= min; i++) {
    if (w % i === 0 && h % i === 0) divisor = i;
  }

  return w * h - (w + h - divisor);
}

console.log(solution(8, 12)); // 80
