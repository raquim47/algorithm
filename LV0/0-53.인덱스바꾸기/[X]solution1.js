// https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// 문자열은 인덱스로 수정이 불가능하다? -> 배열로 바꿔서 풀이
function solution(my_string, num1, num2) {
  const arr = [];
  // 문자열 -> 배열
  for (let i = 0; i < my_string.length; i++) {
    arr[i] = my_string[i];
  }
  //인덱스 수정
  const a = arr[num1];
  const b = arr[num2];
  arr[num1] = b;
  arr[num2] = a;
  // 배열 -> 문자열
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}
console.log(solution("hello", 1, 2)); //"hlelo"
console.log(solution("I love you", 3, 6)); //"I l veoyou"
