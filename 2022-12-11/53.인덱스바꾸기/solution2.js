// https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  let str = "";
  for(let i = 0; i < my_string.length;i++){
      if(i === num1){ // 인덱스가 1일때 
          str += my_string[num2]   
      } else if (i === num2) {
          str += my_string[num1]
      } else {
          str += my_string[i]    
      }
      return str;
  }
}

console.log(solution("hello", 1, 2)); //"hlelo"
console.log(solution("I love you", 3, 6)); //"I l veoyou"
