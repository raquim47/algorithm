// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
    // 매개변수의 문자열을 하나씩 읽는다
    // 문자열의 첫번째 글자를 x라고 했을때
    // 오른쪽으로 읽으면서 x와 x가 아닌 문자의 갯수를 샌다.
    // x와 x가 아닌 문자의 갯수가 같아지는 순간 읽은 글자까지의 문자열을 분리한다
    // 분리한 문자열을 뺴고 남은 글자가 없을 때 까지 위 동작을 계속 반복한다.
    // 만약 위에서 말한 두 갯수가 같지 않은데 더이상 읽을 글자가 없다면 지금까지 읽은 문자열을 분리하고 종료
    let start = "";
    let match = 0;
    let noMatch = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        // 4. 만약 문자열의 끝에 도달했다면 count+1(분리된 갯수)을 return한다.
        if (i === s.length - 1) {
            return count + 1;
        }

        // 1. start가 비어있을때 글자를 start에 넣는다.
        if (start === "") {
            start = s[i];
        }

        // 2. 현재 읽은 글자가 start와 같다면 match에, 다르다면 noMatch에 +1을 한다.
        if (start === s[i]) {
            match += 1;
        } else {
            noMatch += 1;
        }

        // 3. match와 noMatch가 같다면 count(분리한 횟수)에 +1을 하고
        // noMatch, match, start를 리셋해준다.
        if (match === noMatch) {
            count += 1;
            noMatch = 0;
            match = 0;
            start = "";
        }
    }
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
