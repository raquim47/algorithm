
function sub(x) {
  const numbers = '0123456789';

  for (let j = 0; j < numbers.length; j++) {
    if (x === numbers[j]) {
      return [true, j];
    }
  }

  return [false, -1];
}

function numberCheck(v) {
  let calc = 0;
  let onCheck = false;

  for (let i = 0; i < v.length; i++) {
    onCheck = true;
    let [isNum, j] = sub(v[i]);

    if (isNum) {
      let digit = v.length - 1 - i;
      calc += j * 10 ** digit;
    } else {
      return false;
    }
  }

  if (onCheck) {
    return calc;
  } else {
    return 0 + v;
  }
}

function isNumber(value) {
  if (!value && value !== 0) {
    return false;
  }

  if (value[0] === "-") {
    return numberCheck(value, 1) * -1;
  } else {
    return numberCheck(value);
  }
}
// console.log(isNumber(0010));
console.log(isNumber('10')); // 10

