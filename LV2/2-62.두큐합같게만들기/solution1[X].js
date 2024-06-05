// https://school.programmers.co.kr/learn/courses/30/lessons/118667

// 두 큐로 작업할 수 있는 최대 작업 횟수는 유한하며, 큐의 길이 n의 최대값은 n^2

function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, c) => a + c, 0);
  let sum2 = queue2.reduce((a, c) => a + c, 0);

  if ((sum1 + sum2) % 2 !== 0) return -1;
  const half = (sum1 + sum2) / 2;

  const myQueue = [
    {
      q1: { arr: queue1.slice(), sum: sum1 },
      q2: { arr: queue2.slice(), sum: sum2 },
      count: 0,
    },
  ];
  while (myQueue.length) {
    const { q1, q2, count } = myQueue.shift();
    
    if (queue1.length ** 2 <= count + 1) break;

    shiftedQ1 = q1.arr[0];
    shiftedQ2 = q2.arr[0];
    if (q1.sum - shiftedQ1 === half) return count + 1;
    if (q2.sum - shiftedQ2 === half) return count + 1;

    myQueue.push({
      q1: { arr: q1.arr.slice(1), sum: q1.sum - shiftedQ1 },
      q2: { arr: q2.arr.concat(shiftedQ1), sum: q2.sum + shiftedQ1 },
      count: count + 1,
    });

    myQueue.push({
      q1: { arr: q1.arr.concat(shiftedQ2), sum: q1.sum + shiftedQ2 },
      q2: { arr: q2.arr.slice(1), sum: q2.sum - shiftedQ2 },
      count: count + 1,
    });
  }

  return -1;
}

// console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 	2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 	7
