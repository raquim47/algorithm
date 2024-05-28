function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log('Starting fib(40)');
// let start = Date.now();
// setTimeout(() => {
//   console.log(fib(40));
//   let end = Date.now();
//   console.log(`fib(40) took ${end - start} ms`);
// }, 0);

function fibMemo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}
// console.log('Starting fibMemo(40)');
// start = Date.now();
// setTimeout(() => {
//   console.log(fibMemo(100));
//   let end = Date.now();
//   console.log(`fibMemo(40) took ${end - start} ms`);
// }, 0);


function fibTabulation(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fibTabulation(3))