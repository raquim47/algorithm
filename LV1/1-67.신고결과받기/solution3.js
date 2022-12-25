// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 케이스 4개 시간초과

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
  
  // fill([]) 쓰면 배열끼리 전부 연결되서 오류발생
  const reportedList = [];
  for (let i = 0; i < id_list.length; i++) {
    reportedList.push([]);
  }
  console.log("reportedList :", reportedList);

  for (let i = 0; i < noDupReport.length; i++) {
    const [reporter, reported] = noDupReport[i].split(" ");
    for (let j = 0; j < id_list.length; j++) {
      if(id_list[j] === reporter){
        reportedList[j].push(reported);
        break;
      }
    }
  }
  console.log("reportedList :", reportedList);

  const mailList = [];
  for (let i = 0; i < reportedList.length; i++) {
    if(reportedList[i].length >= k){
      mailList.push(...reportedList[i]);
    }
  }
  // console.log(mailList)
  const answer = new Array(id_list.length).fill(0);
  
  for (let i = 0; i < mailList.length; i++) {
    for (let j = 0; j < id_list.length; j++) {
      if(mailList[i] === id_list[j]){
        answer[j] += 1;
        break;
      }
    }
  }
  return answer;
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
