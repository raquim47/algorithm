// https://school.programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

console.log(solution(["Jane", "Kim"])); //	"김서방은 1에 있다"
