// https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript

// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  const [a, b, c] = sides;
  // a가 제일 작은 경우
  if (a < b && a < c) {
    if (c < b) {
      // b가 제일 긴 변
      if (b < a + c) {
        return 1;
      } else {
        return 2;
      }
    } else if (b < c) {
      // c가 제일 긴 변
      if (c < a + b) {
        return 1;
      } else {
        return 2;
      }
    }
    // b가 제일 작은 경우
  } else if (b < a && b < c) {
    if(a < c) { // c가 제일 긴 변
      if(c < a + b) {
        return 1;
      } else {
        return 2;
      }
    } else if (c < a){ //a가 제일 긴 변
      if(a < a + c) {
        return 1;
      } else {
        return 2;
      }
    }
  }

  if (a + b > c || a + c > b || b + c > a) {
    return 1;
  } else {
    return 2;
  }
}

console.log(solution([1, 2, 3])); // 2
console.log(solution([3, 6, 2])); // 2
console.log(solution([199, 72, 222])); // 1
