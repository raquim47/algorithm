// https://school.programmers.co.kr/learn/courses/30/lessons/178870

function solution(sequence, k) {
  let start = 0;
  let end = -1;
  let sum = 0;
  let answer = [0, Infinity];

  while (end < sequence.length) {
    if(sequence[end] > k) break;
    
    if (sum < k) {
      end++;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      start++;
    } else {
      if (answer[1] - answer[0] > end - start) {
        answer = [start, end];
      }
      end++;
      sum += sequence[end];
    }
  }
  return answer;
}

// console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
// console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]
