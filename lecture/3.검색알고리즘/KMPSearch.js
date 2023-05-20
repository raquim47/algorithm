// KMP 알고리즘
// KMP 알고리즘은 주어진 패턴에 대한 최대 접미사 배열(또는 실패 함수라고도 함)을 계산하여 패턴이 부분적으로 일치하면 알고리즘이 불필요하게 중복되는 검사를 건너뛸 수 있게 해준다.
// 1. 실패 배열을 구축.
// 2. 이 배열을 사용하여 주어진 문자열에서 패턴을 검색.
function KMPSearch(origin, keyword) {
  let count = 0;
  // failure 배열 세팅
  //  'omgo'에서 각 위치의 "failure" 값을 계산해보면, 
  const failure = Array(keyword.length).fill(0); // [ 0, 0, 0, 0 ]
  for (let i = 1, j = 0; i < keyword.length; i++) {
    while (j > 0 && keyword[i] !== keyword[j]) {
      j = failure[j - 1];
    }
    if (keyword[i] === keyword[j]) { 
      j++;
    }
    failure[i] = j;
  }
  // console.log(failure);
  // 비교 시작
  //for문 하나에 i, j 투 포인터
  for (let i = 0, j = 0; i < origin.length; i++) {
    while (j > 0 && origin[i] !== keyword[j]) {
      j = failure[j - 1];
    }
    if (origin[i] === keyword[j]) {
      j++;
      console.log(i, j);
    }
    if (j === keyword.length) {
      count++;
      j = failure[j - 1]
    }
    // console.log(i, j)
  }

  return count;
}

console.log(KMPSearch('ABCDABCDABEE', 'ABCDABE'));

//1.실패 함수(failure function) 또는 Pi 배열 생성
//2. 탐색 단계
// 이러한 단계를 거치면서 "어떤 글자가 실패했을 때 어디로 돌아가야 하는가?"를 찾아내는 것이 핵심입니다.