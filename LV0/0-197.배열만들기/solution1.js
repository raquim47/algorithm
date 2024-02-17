// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr) {
  let i = 0;
  const stk = [];
  while (i < arr.length) {
    if (!stk.length) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3])); // 	[1, 2, 3]
