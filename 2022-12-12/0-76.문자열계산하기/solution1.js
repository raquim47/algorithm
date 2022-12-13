// https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript

function solution(my_string) {
  const arr = my_string.split(" ");
  let answer = 0;
  let op = "plus";
  arr.forEach(a => {
      if(a == "-"){
          op = "minus";
      } else if ( a == "+") {
          op = "plus";
      }
      if(op != "minus" && parseInt(a) > 0){
          answer = answer + parseInt(a);
      } else if (op == "minus" && parseInt(a) > 0) {
          answer = answer - parseInt(a);
      }
  })
  return answer;
}

console.log(solution("3 + 4"))	// 7