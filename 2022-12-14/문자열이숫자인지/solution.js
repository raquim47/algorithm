function isNumber(str) {
  if (!str && str !== 0) return false;

  function numberCheck(number, start = 0) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = start; i < number.length; i++) {
      let isNum = false;
      for (let j = 0; j < numbers.length; j++) {
        if (number[i] === numbers[j]) {
          isNum = true;
          break;
        }
      }
      if (!isNum) {
        return false;
      }
    }
    return true;
  }

  if (str[0] === "-") {
    return numberCheck(str, 1);
  } else {
    return numberCheck(str);
  }
}
console.log(isNumber(0));
