function solution(participant, completion) {
  const hashed = {};

  for (let i = 0; i < participant.length; i++) {
    const entry = participant[i];

    if (hashed[entry]) {
      hashed[entry] = hashed[entry] + 1;
    } else {
      hashed[entry] = 1;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    const entry = completion[i];
    hashed[entry] = hashed[entry] - 1;
  }
  
  // return hashed;

  for (let key in hashed) {
    if (hashed[key] >= 1) return key;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
