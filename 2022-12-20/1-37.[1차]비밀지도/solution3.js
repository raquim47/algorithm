// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

// n진법으로 바꾸기
function toRadix(n, radix) {
  let result = "";

  while (n > 0) {
    result = (n % radix) + result;
    n = Math.floor(n / radix);
  }

  return result;
}

// 암호숫자로 바꾸기
function toCipher(arr, numlength) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = toRadix(arr[i], 2);
    arr[i] = arr[i].padStart(numlength, "0");
  }

  return arr;
}

// 지도 만들기
function createMap(arr1, arr2){
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    let str = "";

    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }

    result[i] = str;
  }

  return result;
}

function solution(n, arr1, arr2) {
  const cipher1 = toCipher(arr1, n);
  const cipher2 = toCipher(arr2, n);

  return createMap(cipher1, cipher2);
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]

// console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]

// console.log((15).toString(2));
// console.log((9).toString(2));
// console.log((15 & 9).toString(2));
// console.log((15 | 9).toString(2));
