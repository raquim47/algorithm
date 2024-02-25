// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
    let ans = Array(31).fill(0);
    for (let s of strArr) ans[s.length]++
    return Math.max(...ans)
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])); // 2
