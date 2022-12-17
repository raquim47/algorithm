// https://school.programmers.co.kr/learn/courses/30/lessons/120860?language=javascript

// 1. [x, y]를 곱했을 때 절대값이 가장 큰 배열과 가장 작은 배열을 찾는다.
// 2. 큰 배열의 x, y와 작은 배열의 x, y를 각각 뺀다
// 3. 뺀 x와 y를 곱한다
function solution(arr) {
    let newArr = []
    let maxNum = -256 * 2;
    let maxIndex = -1;
    let minNum = 256 * 2;
    let minIndex = -1;

    for(let i = 0; i < arr.length; i++){
        const [x, y] = arr[i];
        const z = x + y;
        if(maxNum < z){
            maxNum = z;
            maxIndex = i;
        }
        if(minNum > z){
            minNum = z;
            minIndex = i;
        }
    }

    console.log(maxNum, minNum);
    console.log(maxIndex, minIndex);

    const [minX, minY] = arr[minIndex];
    const [maxX, maxY] = arr[maxIndex];
    let x = 0;
    let y = 0;
    if(minX > 0 && maxX > 0) {
        x = maxX - minX;
    } else if (minX < 0 && maxX < 0){
        x = maxX - minX;
    } else {
        x = Math.abs(maxX) + Math.abs(minX);
    }

    if(minY > 0 && maxY > 0) {
        y = maxY - minY;
    } else if (minY < 0 && maxY < 0){
        y = maxY - minY;
    } else {
        y = Math.abs(maxY) + Math.abs(minY);
    }
    console.log(x, y);


    return x * y;
}

//                           2       3        4      3
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]])); // 1
//                           -2       2      0          0
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]])); // 4


// console.log(solution([[0, 0], [0, 1], [1, 0], [1, 1]]	))//
