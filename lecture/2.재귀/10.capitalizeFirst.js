// capitalizeFirst라는 재귀 함수를 작성하라. 문자열의 배열이 주어지면, 배열의 각 문자열의 첫 글자를 대문자로 만드세요.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  const editedFirst = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  return [editedFirst].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
