// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  if (!arr.includes(2)) return [-1];
  const indexArr = arr.reduce(
    (arr, cur, i) => (cur === 2 ? arr.concat(i) : arr),
    []
  );
  return arr.slice(indexArr[0], indexArr[indexArr.length - 1] + 1);
}

// function solution2(arr) {
//   const from = arr.indexOf(2);
//   const end = arr.lastIndexOf(2);

//   return from === -1 ? [-1] : arr.slice(from, end + 1);
// }

console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); //		[2, 1, 2, 1, 10, 2]
// console.log(solution([2,2]))
