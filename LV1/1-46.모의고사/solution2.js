// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function sub(answers, student) {
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student[i % student.length]) {
      count++;
    }
  }
  return count;
}

function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let max = 0;
  let scores = [
    sub(answers, student1),
    sub(answers, student2),
    sub(answers, student3),
  ];

  let result = [];
  let resultI = 0;
  
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= max) {
      max = scores[i];
    }
  }
  
  for (let i = 0; i < scores.length; i++) {
    if(max === scores[i]){
      result[resultI] = i + 1;
      resultI++;
    }
  }

  return result;
}

// console.log(solution([1, 2, 3, 4, 5])); //	[1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
