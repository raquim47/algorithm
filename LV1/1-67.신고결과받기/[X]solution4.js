// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 케이스 3개 시간초과

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
  const noDupReport = [...new Set(report)];

  const reportedList = {};
  for (let i = 0; i < id_list.length; i++) {
    reportedList[id_list[i]] = [];
    reportedList[id_list[i]].push(0);
    reportedList[id_list[i]].push([]);
  }
  // console.log("reportedList :", reportedList);

  for (let i = 0; i < noDupReport.length; i++) {
    const [reporter, reported] = noDupReport[i].split(" ");
    reportedList[reported][0] += 1;
    reportedList[reported][1].push(reporter);
  }
  // console.log("reportedList :", reportedList);
  const mailObj = {};
  for (const id in reportedList) {
    if (reportedList[id][0] >= k) {
      for (let i = 0; i < reportedList[id][1].length; i++) {
        const reporter = reportedList[id][1][i];
        if (!mailObj[reporter]) {
          mailObj[reporter] = 1;
        } else {
          mailObj[reporter] += 1;
        }
      }
    }
  }

  const resultArr = [];
  for (let i = 0; i < id_list.length; i++) {
    const num = mailObj[id_list[i]] ? mailObj[id_list[i]] : 0;
    resultArr.push(num);
  }
  return resultArr;
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
