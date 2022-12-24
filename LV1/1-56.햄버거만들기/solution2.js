// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

// 빵-야채-고기-빵 : 1-2-3-1 // 반대 : 1321
function solution(ingredient) {
  let arr = [];
  let burgerCount = 0;

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    const find = arr.slice(-4).join("");
    // const a = arr.slice(0, 4).join("");
    if (find === "1231") {
      burgerCount += 1;
      arr.splice(-4);
    }
  }

  return burgerCount;
}

// 시간초과 문제!

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
