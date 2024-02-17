// https://school.programmers.co.kr/learn/courses/30/lessons/181860

// function solution(arr, flag) {
//   const result = [];
//   for (let i = 0; i < flag.length; i++) {
//     if (flag[i]) {
//       for (let j = 0; j < arr[i]; j++) {
//         result.push(...[arr[i], arr[i]]);
//       }
//     } else {
//       result.splice(-arr[i])
//     }
//   }
//   return result;
// }

const solution = (arr, flag) => {
  return arr.reduce(
    (p, c, i) =>
      flag[i] ? [...p, ...new Array(c * 2).fill(c)] : p.slice(0, -c),
    []
  );
};
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); //	[3, 3, 3, 3, 4, 4, 4, 4]
