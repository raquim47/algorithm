// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);

            if (arr[i][n] === arr[j][n]) {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                break;
            }

            if (arr[i][n] > arr[j][n]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            console.log(arr);
        }
    }

    return arr;
}

// console.log(solution(["acc", "baa", "bac", "bbb", "cab", "acb"], 1));
// console.log(solution(["sun", "bed", "car"], 1)); //	["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]
