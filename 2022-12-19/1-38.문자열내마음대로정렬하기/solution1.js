// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(strings, n) {
  // 제일 긴 원소의 길이 찾기
  let maxElLength = 1;

  for (let i = 0; i < strings.length; i++) {
    if (maxElLength < strings[i].length) {
      maxElLength = strings[i].length;
    }
  }

  //사전순정렬
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    // 제일 큰 글자 zz... 구하기
    let min = "";
    for (let j = 0; j < maxElLength; j++) {
      min += "z";
    }

    let mark = -1;

    // 배열에서 제일 작은 글자 찾기
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] < min) {
        min = strings[j];
        mark = j;
      }
    }

    arr[i] = strings[mark];
    strings[mark] = 0;
  }
  // 지정한 인덱스순으로 정렬하기
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let min = "z";
    let mark = -1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j][n] < min) {
        min = arr[j][n];
        mark = j;
      }
    }
    newArr[i] = arr[mark];
    arr[mark] = 0;
  }

  return newArr
}

// console.log(solution(["sun", "bed", "car"], 1)); //	["car", "bed", "sun"]
// console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]
