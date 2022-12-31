// https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id) {
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  const step1 = new_id.toLowerCase();
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  let step2 = "";
  for (let i = 0; i < step1.length; i++) {
    if (
      (step1[i] >= "a" && step1[i] <= "z") ||
      step1[i] >= 0 ||
      step1[i] === "-" ||
      step1[i] === "_" ||
      step1[i] === "."
    ) {
      step2 += step1[i];
    }
  }
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  let step3 = "";
  let before = "";
  for (let i = 0; i < step2.length; i++) {
    if (step2[i] !== "." || before !== ".") {
      step3 += step2[i];
    }
    before = step2[i];
  }

  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  let step4 = "";
  for (let i = 0; i < step3.length; i++) {
    if ((i !== 0 && i !== step3.length - 1) || step3[i] !== ".") {
      step4 += step3[i];
    }
  }
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if (step4 === "") {
    step4 = "a";
  }
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  //  만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  if (step4.length >= 16) {
    let step5 = "";
    for (let i = 0; i < 15; i++) {
      if (i !== 14 || step4[i] !== ".") {
        step5 += step4[i];
      }
    }
    step4 = step5;
  }
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (step4.length < 3) {
    step4 += step4[step4.length - 1];
  }
  return step4;
}

// console.log(solution("...!@BaT#*..y.abcdefghijklm")); //	"bat.y.abcdefghi"
console.log(solution("z-+.^.")); //"z--"
// console.log(solution("=.=")); // "aaa"
// console.log(solution("123_.def")); // "123_.def"
// console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"
