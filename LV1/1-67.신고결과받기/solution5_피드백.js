// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 객체 활용한 중복 제거
function removeDup(arr) {
  // newObj에 arr배열의 요소가 key로 존재하지 않을 경우에만 "key: 1"을  넣어줌.
  const newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!newObj[arr[i]]) {
      newObj[arr[i]] = 1;
    }
  }
  // console.log(newObj);
  // for in문으로 key만 다시 새 배열에 담음
  const result = [];
  for (const key in newObj) {
    result.push(key);
  }

  return result;
}

// 신고 내용 담은 리스트 만들기
function setReportedObj(arr) {
  const result = {};
  // 중복제거된 신고 배열을 돌면서 split(" ")으로 앞, 뒤 단어를 나눔
  // {신고 당한 아이디 : [신고 당한 횟수, [신고한 사람]]}
  for (let i = 0; i < arr.length; i++) {
    const [reporter, reported] = arr[i].split(" ");
    // result에 신고 당한 아이디가 없으면 key:[0, []]형식으로 넣어줌
    if (!result[reported]) {
      result[reported] = [];
    }
    // 신고 당한 횟수 추가, 신고한 사람 추가
    result[reported].push(reporter);
  }

  return result;
}

// 메일 보낼 리스트 만들기
function setMailObj(obj, num) {
  const result = {};
  for (const id in obj) {
    if (obj[id].length >= num) {
      for (let i = 0; i < obj[id].length; i++) {
        const reporter = obj[id][i];
        !result[reporter] ? (result[reporter] = 1) : (result[reporter] += 1);
      }
    }
  }
  return result;
}

// 메일 보낼 횟수 배열로 만들기
function setMailArr(arr, obj){
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const num = obj[arr[i]] ? obj[arr[i]] : 0;
    result.push(num);
  }
  return result;
}

function solution(id_list, report, k) {
  // 1. 신고 중복 제거
  const noDupReport = removeDup(report);
  
  // 2. {신고 당한 아이디 : [신고 당한 횟수, [신고한 사람]]} 형식의 객체 만들기
  const reportedObj = setReportedObj(noDupReport);
  console.log("reportedObj :", reportedObj);
  
  // 3. 메일 보낼 리스트 만들기
  const mailObj = setMailObj(reportedObj, k);
  // console.log("mailObj :", mailObj);

  // 4. 메일 보낼 횟수 배열로 만들기
  return setMailArr(id_list, mailObj);
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
