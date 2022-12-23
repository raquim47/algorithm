// https://school.programmers.co.kr/learn/courses/30/lessons/120884?language=javascript

// 100마리 주문했을 때
// 쿠폰은 1마리당 1개
// 서비스 치킨은 (100 / 10) + 쿠폰
// 1081개 주문
function solution(chicken) {
  let coupon = chicken; // 쿠폰은 10개
  let service = 0;
  let result = 0;
  
  while(coupon >= 10){
    service += Math.floor(coupon / 10); //서비스 10개 // 1 
    coupon = coupon % 10; // 쿠폰 0개 // 0개
    result += service; // 총 10개 // 11개
    coupon += service; // 쿠폰 10 // 1개
    service = 0;
  }

  return result;
}

console.log(solution(100)); // 	11
console.log(solution(1081)); // 120
