// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function sub(numbers, arr1, arr2) {
  const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < maxLength; i++) {
    arr1[i] && arr1[i] !== "-" && numbers[arr1[i]].X++;
    arr2[i] && arr2[i] !== "-" && numbers[arr2[i]].Y++;
  }

  return numbers;
}

function solution(X, Y) {
  const numbers = {
    0: { X: 0, Y: 0 },
    1: { X: 0, Y: 0 },
    2: { X: 0, Y: 0 },
    3: { X: 0, Y: 0 },
    4: { X: 0, Y: 0 },
    5: { X: 0, Y: 0 },
    6: { X: 0, Y: 0 },
    7: { X: 0, Y: 0 },
    8: { X: 0, Y: 0 },
    9: { X: 0, Y: 0 },
  };
  const scoredNumbers = sub(numbers, X, Y);

  console.log(scoredNumbers);
  let answer = "";

  for (const key in scoredNumbers) {
    const {X, Y} = scoredNumbers[key];
    if(X * Y){
      const number = X < Y ? X : Y;
      // console.log(number)
      for (let i = 0; i < number; i++) {
        answer = key + answer; 
      }
    }
  }
  
  if(!answer){
    answer = "-1";
  } else if(Number(answer) === 0){
    answer = "0";
  }

  return answer;
}


// console.log(solution("100", "2345")); //	"-1"
// console.log(solution("100", "203045")); //"0"
// console.log(solution("100", "123450")); //	"10"
console.log(solution("12321", "42531")); //"321"
// console.log(solution("5525", "1255")); //"552"
