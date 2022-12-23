// https://school.programmers.co.kr/learn/courses/30/lessons/120884?language=javascript

// 100마리 주문했을 때
// 쿠폰은 1마리당 1개
// 서비스 치킨은 (100 / 10) + 쿠폰
// 1081개 주문
function solution(chicken) {
  let coupon = chicken; // 쿠폰은 1081개
  let service = Math.floor(coupon / 10); // 108개
  coupon = coupon % 10; // 남은 쿠폰 1개
  let result = 0;
  result += service; // 총서비스 108 ; 서비스 108개
  // return result;
  coupon += service; // 쿠폰 109개 생김
  service = 0;

  service += Math.floor(coupon / 10); // 10개 시킴
  coupon = coupon % 10 // 쿠폰은 9개 남음
  result += service;
  coupon += service; // 쿠폰 19개
  service = 0;

  service += Math.floor(coupon / 10); // 1개 시킴
  coupon = coupon % 10; //쿠폰 9개 남음
  result += service;
  coupon += service // 쿠폰 10개
  service = 0;

  service += Math.floor(coupon / 10);
  coupon = coupon % 10;
  result += service;
  coupon += service;
  service = 0;
  // if(coupon < 10){
  //   break;
  // }

  return result;

  

  return coupon;
}

// console.log(solution(1000)); // 	11
// console.log(solution(10)); // 	11
console.log(solution(1081)); // 120
