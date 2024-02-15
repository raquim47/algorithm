// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// function solution(binomial) {
//   const [a, op, b] = binomial.split(' ');
//   if(op === '-'){
//     return +a - +b;
//   }
//   if(op === '+'){
//     return +a + +b;
//   }
//   if(op === '*'){
//     return +a * +b;
//   }
// }

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}

console.log(solution('0 - 7777')); // 	-7777
