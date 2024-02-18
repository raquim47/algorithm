// https://school.programmers.co.kr/learn/courses/30/lessons/181857

const obj = { a: 1, b: 1, c: 1 };

function solution(myStr) {
  return myStr.split(/[abc]/).filter(Boolean) || ['EMPTY'];
  const result = [];
  let str = '';
  for (let i = 0; i < myStr.length; i++) {
    if (obj[myStr[i]]) {
      if (str) {
        result.push(str);
      }
      str = '';
    } else {
      str += myStr[i];
    }
  }

  if (str) {
    result.push(str);
  }
  return result;
}

console.log(solution('baconlettucetomato')); //		["onlettu", "etom", "to"]
