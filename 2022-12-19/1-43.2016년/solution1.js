// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  const dayPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  // const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let calc = 0;
  
  for (let i = 0; i < a - 1; i++) {
    calc += dayPerMonth[i];
  }

  return day[(calc + b - 1) % 7];
}

// console.log(solution(5, 24)); // "TUE"

console.log(solution(1, 1)); // "FRI"