// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const list = files.reduce((array, filename) => {
    const match = filename.match(/^([^\d]+)(\d+)/);
    const file = {
      origin: filename,
      head: match[1].toLowerCase(),
      number: +match[2],
    };
    array.push(file);
    return array;
  }, []);

  list.sort((a, b) => {
    if (a.head < b.head) {
      return -1;
    } else if (a.head > b.head) {
      return 1;
    } else {
      if (a.number < b.number) {
        return -1;
      } else if (a.number > b.number) {
        return 1;
      }
      return 0;
    }
  });

  return list.map((s) => s.origin);
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

// const test = ['a', 'c', 'A', 'B', 'C', 'b'];
// test.sort((a, b) => {
//   const lowerA = a.toLowerCase();
//   const lowerB = b.toLowerCase();

//   return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
// });
// console.log(test);
