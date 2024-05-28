// https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요. 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  const splitArr = s.split(' ');
  splitArr.sort((a, b) => a - b);
  return `${splitArr[0]} ${splitArr[splitArr.length - 1]}`;
}

// ⭐️ .map(a => Number(a))가 불필요한 이유 : a - b와 같은 산술 연산자를 사용하면, 연산자의 피연산자들이 자동으로 숫자로 변환되는 타입 강제 변환이 발생.

console.log(solution('-1 2312')); //"-1 2312"
// console.log(solution('1 2 3 4')); //"1 4"
// console.log(solution('-1 -2 -3 -4')); //"-4 -1"
// console.log(solution("-1 -1")); //	"-1 -1"
// console.log(solution("0 -1")); //	"-1 0"
