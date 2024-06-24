// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const list = files.reduce((array, filename) => {
    const [_, head, number] = filename.match(/^([^\d]+)(\d+)/);
    const file = {
      origin: filename,
      head: head.toLowerCase(),
      number: +number,
    };
    array.push(file);
    return array;
  }, []);

  return list
    .sort((a, b) => {
      if (a.head === b.head) {
        return a.number - b.number;
      }
      return a.head < b.head ? -1 : 1;
    })
    .map((v) => v.origin);
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
