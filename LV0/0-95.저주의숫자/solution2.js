// https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=javascript

function solution(n) {
  let arr = [];
  arrI = 0;
  for (let i = 0; i <= 200; i++) {
    if (i % 3 !== 0) {
      arr[arrI] = i;
      arrI++;
    }
  }
  let arr2 = [];
  let arr2I = 0;
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i] + "";
    let isThree = false;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "3") {
        isThree = true;
        break;
      }
    }
    if(!isThree){
      arr2[arr2I] = arr[i];
      arr2I++;
    }
  }
  return arr2[n - 1];
}
console.log(solution(3)); // 14
// console.log(solution(3))// 4
// console.log(solution(15)); //25
// console.log(solution(40)); //76
