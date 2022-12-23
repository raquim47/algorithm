// https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript

function solution(spell, dic) {
  const arrSpell = spell.sort().join("");
  const newArr = dic.map((a) => {
    return a.split("").sort().join("");
  });
  if (newArr.includes(arrSpell)) {
    return 1;
  } else {
    return 2;
  }
}

console.log(
  (solution[("p", "o", "s")], ["sod", "eocd", "qixm", "adio", "soo"])
); // 2
console.log((solution[("z", "d", "x")], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(
  (solution[("s", "o", "m", "d")], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2
