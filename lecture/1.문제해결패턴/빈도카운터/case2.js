// 예제 2
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 아나그램인지 확인하는 함수를 작성하세요. 아나그램은 다른 단어, 구, 또는 이름의 문자를 재배열하여 만든 것입니다. 예를 들어 'cinema'는 'iceman'에서 만들어진 것입니다.

// My Code
function validAnagram(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (const val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (const val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (const key in obj1) {
    if (!obj2[key]) return false;

    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

//  Lecture Code
function validAnagram(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  let obj = {};
  for (const val of arr1) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (const val of arr2) {
    if(!obj[val]) return false;

    obj[val] -= 1;
  }


  return true;
}
// console.log(validAnagram('', '')); // true
// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('anagram', 'nagaram')); // true
// console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
