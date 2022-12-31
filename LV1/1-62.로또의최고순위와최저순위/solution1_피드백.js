// https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function count(target, find) {
    let result = 0;

    for (let i = 0; i < target.length; i++) {
        if (target[i] === find) {
            result += 1;
        }
    }

    return result;
}

function solution(lottos, winNums) {
    const grades = [6, 6, 5, 4, 3, 2, 1];
    let score = 0;
    let zeroCount = count(lottos, 0);

    for (let i = 0; i < lottos.length; i++) {
        score += count(winNums, lottos[i]);
    }

    // console.log('count', score);
    // console.log('zeroCount', zeroCount);

    return [grades[score + zeroCount], grades[score]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
