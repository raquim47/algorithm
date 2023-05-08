// 예제 2
// 정렬된 배열을 입력으로 받는 countUniqueValues라는 함수를 구현하세요. 이 함수는 배열 내 고유한 값의 개수를 세어야 합니다. 입력 배열에는 음수가 포함될 수 있지만, 항상 정렬되어 있을 것입니다.

// My Code
function countUniqueValues(arr) {
  if(!arr.length) return 0;

  let fst = 0;
  let snd = 1;
  while (snd < arr.length) {
    if(fst === snd){
      snd = fst + 1;
    } 

    console.log(fst, arr[fst], snd, arr[snd])
    if(arr[fst] === arr[snd]){
      snd++;
    } else {
      fst++;
      arr[fst] = arr[snd];
    }
  }
  return fst + 1;
}

// Lecture Code
function countUniqueValues2(arr) {
  if(!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    } 
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
// console.log(countUniqueValues2([])); //0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); //4
