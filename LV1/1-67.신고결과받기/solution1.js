// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(idList, report, k) {
    const temp = {};

    for (let i = 0; i < report.length; i++) {
        const [value, key] = report[i].split(' ');
        if (temp[key] === undefined) {
            temp[key] = [value];
        } else {
            if (!temp[key].includes(value)) {
                temp[key].push(value);
            }
        }
    }
    // console.log(temp);

    const result = new Array(idList.length).fill(0);
    for (const key in temp) {
        if (temp[key].length >= k) {
            for (let i = 0; i < temp[key].length; i++) {
                result[idList.indexOf(temp[key][i])] += 1;
            }
        }
    }

    return result;
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2)
); // [2,1,1,0]

console.log(
  solution(
      ["con", "ryan"],
      ["ryan con", "ryan con", "ryan con", "ryan con"],
      3)
); // [0,0]
