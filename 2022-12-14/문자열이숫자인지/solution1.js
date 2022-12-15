function isNumber(value) {
  if (!value && value !== 0) return false;

  function numberCheck(v, start = 0) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let calc = 0;
    let onCheck = false;

    for (let i = start; i < v.length; i++) {
      onCheck = true;
      let digit = v.length - 1 - i;
      let isNum = false;

      for (let j = 0; j < numbers.length; j++) {
        if (v[i] === numbers[j]) {
          isNum = true;
          calc += j * 10 ** digit;
        }
      }
      if (!isNum) {
        return false;
      }
    }
    if (onCheck) {
      return calc;
    } else {
      return 0 + v;
    }
  }

  if (value[0] === "-") {
    return numberCheck(value, 1) * -1;
  } else {
    return numberCheck(value);
  }
}
console.log(isNumber(0010));
