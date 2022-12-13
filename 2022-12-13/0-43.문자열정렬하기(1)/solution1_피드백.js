// https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript

// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
    let arr = [];
    let arrIndex = 0;
    // 숫자만 고르기
    for (let i = 0; i < my_string.length; i++) {
        if (parseInt(my_string[i]) > -1) {
            arr[arrIndex] = parseInt(my_string[i]);
            arrIndex++;
        }
    }
    // 오름차순 정렬
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j, arr[i], arr[j]);
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(solution("hi12392")); //	[1, 2, 2, 3, 9]
// console.log(solution("p2o4i8gj2")); //[2, 2, 4, 8]
// console.log(solution("abcde0")); //[0]


// console.log(parseInt('a'));
// console.log(parseInt('0'));
// console.log(parseInt('1'));
console.log(parseInt('2', 10));
// console.log(parseInt(''));
// console.log(parseInt(' '));
console.log(Number(''));
console.log(Number(' '));