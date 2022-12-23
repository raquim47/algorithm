// https://school.programmers.co.kr/learn/courses/30/lessons/120863?language=javascript

function solution(polynomial) {
  const addedPoly = polynomial + " ";
  // 배열에 담기
  let arr = [];
  let arrI = 0;

  // "3x + 7 + x"
  let word = "";
  for (let i = 0; i < addedPoly.length; i++) {
    let isWord = true;
    if (addedPoly[i] === " ") {
      isWord = false;
      arr[arrI] = word;
      arrI++;
      word = "";
    }
    if (isWord) {
      word += addedPoly[i];
    }
  }
  // x값만 가져오기
  let valueX = [];
  let valueXI = 0;
  let valueNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let isX = false;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "x") {
        isX = true;
      }
    }
    if (isX) {
      valueX[valueXI] = arr[i];
      valueXI++;
    } else if (arr[i] !== "+") {
      valueNumber += parseInt(arr[i]);
    }
  }
  let valueXResult = 0;
  for (let i = 0; i < valueX.length; i++) {
    if (parseInt(valueX[i]) > 1) {
      valueXResult += parseInt(valueX[i]);
    } else {
      valueXResult++;
    }
  }
  if (valueNumber === 0) {
    if (valueXResult === 1) {
      return `x`;
    } else {
      return `${valueXResult}x`;
    }
  } else if (valueXResult === 0) {
    return `${valueNumber}`;
  } else {
    if (valueXResult === 1) {
      return `x + ${valueNumber}`;
    } else {
      return `${valueXResult}x + ${valueNumber}`;
    }
  }
}

// console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("x + x + x")); // "3x"
console.log(solution("8")); // "3x"
