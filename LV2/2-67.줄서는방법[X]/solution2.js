// https://school.programmers.co.kr/learn/courses/30/lessons/12936

// 팩토리얼을 계산하는 함수
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

function solution(n, k) {
  let arr = Array.from({length: n}, (_, i) => i + 1);
  let answer = [];
  k -= 1; // 0부터 인덱싱을 시작하기 위해

  while (n > 0) {
      let fact = factorial(n - 1); // (n-1) 팩토리얼 계산
      let index = Math.floor(k / fact);
      console.log(n, fact, index)
      answer.push(arr[index]); // k번째 순열의 첫 번째 숫자 추가
      arr.splice(index, 1); // 사용한 숫자는 배열에서 제거
      k %= fact; // 나머지로 k 업데이트
      n -= 1;
  }

  return answer;
}



console.log(solution(3, 5)); // [3,1,2]
