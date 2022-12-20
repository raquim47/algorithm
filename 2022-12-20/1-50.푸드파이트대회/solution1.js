// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

function solution(food) {
  let str1 = "";
  let str2 = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      str1 = str1 + (i + "");
      str2 = (i + "") + str2;
    }
  }
  return str1 + "0" + str2;
}

console.log(solution([1, 3, 4, 6])); //	"1223330333221"
// console.log(solution([1, 7, 1, 2])); //	"111303111"
