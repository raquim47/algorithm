
function sub(x) {
  const numbers = '0123456789';

  for (let j = 0; j < numbers.length; j++) {
    if (x === numbers[j]) {
      return x;
    }
  }

  return '';
}

function numberCheck(v) {
  let result = '';
  let onCheck = false;

  for (let i = 0; i < v.length; i++) {
    onCheck = true;
    let j = sub(v[i]);

    if (j === '') {
      return false;
    }

    result += j;
  }

  if (onCheck) {
    return Number(result);
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

