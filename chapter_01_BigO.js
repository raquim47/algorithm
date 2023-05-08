function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// console.log(addUpTo(3));
// console.log(addUpTo2(3));
// 무엇이 더 좋은 코드인가? 
// 1. 속도
// 2. 메모리 효율
// 3. 가독성

// performance.now()를 이용해서 시간 측정하기

let t1 = performance.now();
addUpTo2(1000000000)
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 2번째 방법이 훨씬 효율적인 것으로 보인다. 하지만 매번 이렇게 수동으로 시간을 구하고 서로 비교하는 것은 다음과 같은 이유로 어렵다.

// 1. 기기마다 다른 방식으로 시간을 기록
// 2. 같은 기기라도 다른 시간을 기록
// 3. 빠른 알고리즘에서는 정말 짧은 시간에 코드가 처리되기 때문에 속도 측정이 어려울 수 있음.

// 시간을 측정하지 않고 속도를 비교하는 방법은?
// 컴퓨터가 처리해야하는 연산 갯수를 센다.

// function addUpTo2(n) {
//   return (n * (n + 1)) / 2;
// }
// 위 코드에서 연산자는 총 3개 -> 연산은 3번 일어난다.(피연산자의 크기는 관계없음)

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// 위 코드에서 연산자는 +도 있고 =도 있고
// 또한 for문 안에 있는 연산자는 * n번의 연산이 일어남

// 중요한 것은 정확한 숫자는 사실 상관업음, 전체적인 추세를 보는 것이 중요
// https://rithmschool.github.io/function-timer-demo/