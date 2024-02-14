// https://school.programmers.co.kr/learn/courses/30/lessons/181863

function solution(rny_string) {
  let answer = '';
  for (const str of rny_string) {
    if(str === 'm'){
      answer += 'rn'
    } else {
      answer += str;
    }
  }
  return answer
}
// function solution(rny_string){
//   return rny_string.replaceAll('m', 'rn')
// }

console.log(solution("masterpiece")); //"rnasterpiece"
