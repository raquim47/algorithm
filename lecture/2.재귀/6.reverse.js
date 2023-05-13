// 문자열을 입력받아 뒤집어서 새로운 문자열로 반환하는 재귀 함수인 reverse를 작성하십시오.
// My Code
function reverse(str) {
  let newStr = '';
  if (str.length === 0) {
    return newStr;
  }
  newStr = str[str.length - 1] + reverse(str.slice(0, -1));
  return newStr;
}
// Lecture Code
function reverse2(str){
	if(str.length <= 1) return str;
	return reverse2(str.slice(1)) + str[0];
}
// console.log(reverse('awesome')); // 'emosewa'
console.log(reverse2('rithmschool')); // 'loohcsmhtir'
