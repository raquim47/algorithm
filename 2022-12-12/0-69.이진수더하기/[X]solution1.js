// https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript

// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.


function solution(bin1, bin2) {
  const arr1 = bin1.split("");
  const arr2 = bin2.split("");
  let newArr = [];
  let up = 0;
  for (let i = 0; i <= 10; i++) {
    const sum = parseInt(arr1[i]) + parseInt(arr2[i]);
    if (sum === NaN && up === 0) {
      break;
    }
    if (sum + up === 2) {
      newArr[i] = 0;
      up = 1;
    } else {
      newArr[i] = sum + up;
    }
    
  }
  return newArr;
}

console.log(solution("10", "11")); // "101",
console.log(solution("1001", "1111")); // "11000,"
