// 연습문제7
// 문자열을 인자로 받는 함수 findLongestSubstring를 작성하세요. 이 함수는 주어진 문자열에서 모든 문자를 하나씩만 갖고 있는 가장 긴 문자열의 길이를 반환하시오.

// Restrictions: Time - O(N)

// My Code 풀이 못함
function findLongestSubstring(str) {
  let i = 0;
  let j = 0;
  let max = 0;
  let obj = {};
  while(j < str.length){
    if(obj[str[j]]){
      i = j;
      obj = {};
    } 
    obj[str[j]] = 1;
    max = Math.max(max, j + 1 - i);
    j++;
    // console.log(obj, max)
  }
  return max;
}

// Lecture Code

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // 부분 문자열의 시작 인덱스를 이전 문자의 다음 인덱스로 업데이트합니다.
      start = Math.max(start, seen[char]);
    }
    // longest 변수를 업데이트하여 현재 인덱스와 시작 인덱스의 차이에 1을 더한 값과 기존 longest 값 중 더 큰 값을 저장합니다. (현재 문자를 포함하기 위해 1을 더함)
    longest = Math.max(longest, i - start + 1);
    // 현재 문자를 seen 객체에 저장하고, 인덱스를 다음 인덱스로 설정하여 중복 문자를 처리할 수 있도록 합니다.
    seen[char] = i + 1;
  }
  return longest;
}


// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring2('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6
