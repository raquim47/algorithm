// https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript

// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
// 1. 10번동안 다음 동작을 반복한다.
// 1-1. bin[i] , bin2[i]를 a, b에 저장
// 1-2. a,b가 각각 NaN이면 각각 0으로 수정
// 1-3. a, b + up을 sum에 저장
// 1-4.
// sum이 0이면 반복을 끝내고 2.으로 간다.
// sum이 2면 up에 1을 저장
// sum이 1이면 up에 0을 저장
// 1-5 newArr[i]에 sum을 저장, 1-1로

// 2. newArr배열의 순서를 뒤집는다
// 3. 문자열로 변환해서 반환한다.
function solution(bin1, bin2) {
  const arr1 = bin1.split("");
  const arr2 = bin2.split("");

  let newArr = [];
  let up = 0;
  for (let i = 0; i <= 10; i++) {
    let a = parseInt(arr1[arr1.length - (1 + i)]);
    let b = parseInt(arr2[arr2.length - (1 + i)]);
    if (!(a > -1)) {
      a = 0;
    }
    if (!(b > -1)) {
      b = 0;
    }
    const sum = a + b + up;
    if (sum === 0) {
      if (
        !(arr1[arr1.length - (1 + i)] > -1) &&
        !(arr1[arr1.length - (1 + i)] > -1)
      ) {
        break;
      }
      newArr[i] = 0;
    } else if (sum === 1) {
      // sum이 1이면 newArr[i]에 1저장, up에 0 저장
      newArr[i] = 1;
      up = 0;
    } else if (sum === 2) {
      // sum이 2면 newArr[i]에 0저장, up에 1저장
      newArr[i] = 0;
      up = 1;
    } else if (sum === 3) {
      newArr[i] = 1;
      up = 1;
    }
  }

  // 뒤집기
  let answerArr = [];
  for (let i = 0; i < newArr.length; i++) {
    answerArr[i] = newArr[newArr.length - (i + 1)];
  }

  // 문자열로
  let answer = "";
  for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i];
  }
  return answer;
}

// console.log(solution("10", "11")); // "101",
// console.log(solution("1001", "1111")); // "11000,"
console.log(solution("1010101", "100001")); // "10000100000"
