// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// function solution(scoville, K) {
//   scoville.sort((a, b) => a - b);
//   let mixCount = 0;

//   while (scoville.length > 1 && scoville[0] < K) {
//       let leastSpicy = scoville.shift();
//       let secondLeastSpicy = scoville.shift();
//       let mixed = leastSpicy + 2 * secondLeastSpicy;
//       scoville.push(mixed);
//       scoville.sort((a, b) => a - b);
//       mixCount++;
//   }

//   return scoville[0] >= K ? mixCount : -1;
// }

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(currentIdx) {
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      const parentValue = this.values[parentIdx];
      const currentValue = this.values[currentIdx];

      if (parentValue <= currentValue) break;

      this.values[parentIdx] = currentValue;
      this.values[currentIdx] = parentValue;

      currentIdx = parentIdx;
    }
  }

  extractMin() {
    if (this.values.length === 0) return undefined;
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();

      return min;
    }
  }

  bubbleDown() {
    let currentIdx = 0;
    const length = this.values.length;

    while (true) {
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 2;
      let nextIdx = currentIdx;

      if (
        leftChildIdx < length &&
        this.values[leftChildIdx] < this.values[nextIdx]
      ) {
        nextIdx = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.values[rightChildIdx] < this.values[nextIdx]
      ) {
        nextIdx = rightChildIdx;
      }

      if (nextIdx === currentIdx) break;

      [this.values[currentIdx], this.values[nextIdx]] = [
        this.values[nextIdx],
        this.values[currentIdx],
      ];
      currentIdx = nextIdx;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinBinaryHeap();
  scoville.forEach((v) => heap.insert(v));
  let mixCount = 0;
  while (heap.values[0] < K) {
    if (heap.values.length < 2) return -1; // 더 이상 섞을 수 없을 때
    const first = heap.extractMin();
    const second = heap.extractMin();
    const mixed = first + second * 2;
    heap.insert(mixed);
    mixCount++;
  }
  return mixCount;
}
console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      [this.values[parentIdx], this.values[idx]] = [element, parent];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [this.values[swap], element];
      idx = swap;
    }
  }
}
