// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

// 빵-야채-고기-빵 : 1-2-3-1 //
function solution(ingredient) {
  // 매개변수로 들어온 배열을 하나씩 arr에 옮겨 닮았을 때
  // arr의 끝번째부터 4개의 요소가 순서대로 1,2,3,1이면
  // 그 요소들은 제거하고 burgerCount를 1증가 시킨다.
  let arr = [];
  let burgerCount = 0;

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    const find = arr.slice(-4).join("");
    console.log(find);

    if (find === "1231") {
      burgerCount += 1;
      arr.splice(-4);
    }
  }

  return burgerCount;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
