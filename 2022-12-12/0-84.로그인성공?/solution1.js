// https://school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript

function solution(id_pw, db) {
  const [inId, inPw] = id_pw;
  let message = "fail";
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === inId) {
      message = "wrong pw";
      if (db[i][1] === inPw) {
        message = "login";
        break;
      }
    }
  }
  return message;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [(["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"])]
  )
); // "login"
console.log(
  solution(
    ["programmer01", "15789"],
    [
      (["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"]),
    ]
  )
); //	"wrong pw"
console.log(
  solution(
    ["rabbit04", "98761"],
    [(["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"])]
  )
); //	"fail"
