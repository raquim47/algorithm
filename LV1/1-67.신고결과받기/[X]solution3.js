// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 케이스 7개 시간초과

// 중복 제거
function removeDup(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isInNewArr = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isInNewArr = true;
        break;
      }
    }

    if (!isInNewArr) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function solution(id_list, report, k) {
  // 신고 중복 제거
  const noDupReport = removeDup(report);

  const reportedList = {};
  // console.log("reportedList :", reportedList);

  for (let i = 0; i < noDupReport.length; i++) {
    const [reporter, reported] = noDupReport[i].split(" ");
    if (!reportedList[reported]) {
      reportedList[reported] = 0;
    }
    reportedList[reported] += 1;
  }
  // console.log("reportedList :", reportedList);
  const banList = [];
  for (const id in reportedList) {
    if (reportedList[id] >= k) {
      banList.push(id);
    }
  }
  console.log(banList);
  console.log("noDupReport", noDupReport);

  const reporterObj = {};
  for (let i = 0; i < banList.length; i++) {
    // [ 'frodo', 'neo' ]
    for (let j = 0; j < noDupReport.length; j++) {
      const [reporter, reported] = noDupReport[j].split(" ");
      if (banList[i] === reported) {
        if (!reporterObj[reporter]) {
          reporterObj[reporter] = 0;
        }
        reporterObj[reporter] += 1;
      }
    }
  }

  const answerArr = [];
  for (let i = 0; i < id_list.length; i++) {
    const num = reporterObj[id_list[i]] ? reporterObj[id_list[i]] : 0;
    answerArr.push(num);
  }
  return answerArr;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]
// console.log(
//   solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
// ); // [0,0]
