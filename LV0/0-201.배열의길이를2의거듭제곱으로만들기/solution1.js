// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  let i = 0;
  const arrLength = arr.length;
  while (arrLength > 2 ** i) {
    i++;
  }

  for (let j = 0; j < 2 ** i - arrLength; j++) {
    arr.push(0);
  }
  
  return arr;
}

// console.log(solution([1, 2, 3, 4, 5, 6])); //		[	[1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); //		[58, 172, 746, 89]
