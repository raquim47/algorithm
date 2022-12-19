// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  let temp1 = -1;
  let temp2 = -1;

  for (let i = 0; i < participant.length; i++) {
    let max1 = "a";
    let max2 = "a";

    for (let j = 0; j < participant.length; j++) {
      if (max1 < participant[j]) {
        max1 = participant[j];
        temp1 = j;
      }
      if (max2 < completion[j]) {
        max2 = completion[j];
        temp2 = j;
      }
    }

    if (max1 !== max2) {
      return max1;
    }

    participant[temp1] = "a";
    completion[temp2] = "a";
  }

  return participant[participant.length - 1];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
// console.log(
//   solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
// ); // "mislav"
