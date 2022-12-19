// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function setDecending(arr) {
  let newArr = [];
  let tempI = -1;
  
  for (let i = 0; i < arr.length; i++) {
    let max = "a";

    for (let j = 0; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
        tempI = j;
      }
    }
    newArr[i] = max;
    arr[tempI] = "a";
  }

  return newArr;
}

function solution(participant, completion) {
  const descendingPtp = setDecending(participant);
  const descendingCpl = setDecending(completion);
  
  for (let i = 0; i < descendingPtp.length; i++) {
    if (descendingPtp[i] !== descendingCpl[i]) {
      return descendingPtp[i];
    }
  }
}

// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
// console.log(
//   solution(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
//   )
// ); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
