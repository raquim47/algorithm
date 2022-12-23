// https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript

// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(my_str, n) {
  let arr = [];
  let str = "";
  let count = 0;
  for (let i = 0; i < my_str.length; i++) {
    count++;
    str += my_str[i];
    if (count === n) {
      arr.push(str);
      str = "";
      count = 0;
    }
    if (i === my_str.length - 1 && str) {
      arr.push(str);
    }
  }
  return arr;
}
console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
