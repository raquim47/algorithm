// https://school.programmers.co.kr/learn/courses/30/lessons/120812?language=javascript
function solution(array) {
  // 1. 배열을 오름차순으로 정렬한다.
  // 2. 
  // 이전 숫자와 지금 숫자가 다르면 count를 0(새 count 시작)
  // 같으면 count = count + 1
  // 3. 만약 maxCount가 현재 카운트와 같은데 maxNum(:최고값으로 저장된 숫자)가 현재숫자와 다르면
  // isDuplic = true
  // 4. 만약 현재 카운트가 maxNum보다 크다면
  // maxNum을 현재숫자로 바꾸고,
  // maxCount를 현재카운트로 바꾸고
  // isDuplic = false; -> 3에서 true였지만 count가 더 커짐(: 최빈값이 중복되지 않음)
  // 5.반복을 다 돌고 isDuplic = true면(중복된 최빈값이 있다는 뜻)  -1을 반환
  // 6.maxNum을 반환

  const sortedArr = array.sort((a, b) => a - b);
  let beforeNum;
  let maxNum = 0;
  let count = 0;
  let maxCount = -1;
  let isDuplic = false;
  for (let i = 0; i < sortedArr.length; i++) {
    if (beforeNum !== sortedArr[i]) {
      count = 0;
    } else {
      count++;
    }
    if (maxCount === count) {
      if (maxNum !== sortedArr[i]) {
        isDuplic = true;
      }
    }
    if (count > maxCount) {
      maxNum = sortedArr[i];
      maxCount = count;
      isDuplic = false;
    }
    beforeNum = sortedArr[i];
  }
  if (isDuplic) {
    return -1;
  }
  return maxNum;
}

console.log(solution([1, 2, 3, 3, 3, 4])); //	3
console.log(solution([1, 1, 2, 2])); //-1
console.log(solution([1])); //	1
