// https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript

function solution(n, k) {
    return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
}
// n이 10보다 작으면 서비스 할인도 0 (Math.floor(9 / 10) * 2000)

console.log(solution(10, 3)); // 124,000
console.log(solution(64, 6)); // 768,000
