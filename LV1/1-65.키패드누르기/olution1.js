// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function distance(n, m) {
    return (Math.floor(Math.abs(m - n) / 3)) + (Math.abs(m - n) % 3);
}

function solution(numbers, hand) {
    const hands = {left: 'L', right: 'R'};
    const keypad = {
        1: hands['left'], 4: hands['left'], 7: hands['left'],
        3: hands['right'], 6: hands['right'], 9: hands['right'],
        2: '', 5: '', 8: '', 11: ''};

    let answer = "";
    const prev = {L: 10, R: 12};
    // console.log('prev', prev);

    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i] === 0 ? 11 : numbers[i];
        let temp = keypad[n];
        // console.log('n', n);

        if (temp === '') {
            const distanceL = distance(n, prev.L);
            const distanceR = distance(n, prev.R);
            // console.log('distanceL, distanceR', distanceL, distanceR);

            if (distanceL === distanceR) {
                temp = hands[hand];
            } else {
                temp = (distanceL < distanceR) ? hands['left'] : hands['right'];
            }
        }
        // console.log('temp', temp);

        prev[temp] = n;
        answer += temp;
    }

    return answer;
}

console.log('LRLLLRLLRRL', solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // 'LRLLLRLLRRL'
console.log('LRLLRRLLLRR', solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // 'LRLLRRLLLRR'
console.log('LLRLLRLLRL', solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // 'LLRLLRLLRL'
