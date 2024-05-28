// https://school.programmers.co.kr/learn/courses/30/lessons/42626

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
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
    }

    return min;
  }

  bubbleDown() {
    let currentIdx = 0;
    const length = this.values.length;

    while (true) {
      const leftChildIdx = 2 * currentIdx + 1;
      const rightChildIdx = 2 * currentIdx + 2;
      let nextIndex = currentIdx;

      if (
        leftChildIdx < length &&
        this.values[leftChildIdx] < this.values[nextIndex]
      ) {
        nextIndex = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.values[rightChildIdx] < this.values[nextIndex]
      ) {
        nextIndex = rightChildIdx;
      }

      if (nextIndex === currentIdx) break;

      [this.values[currentIdx], this.values[nextIndex]] = [
        this.values[nextIndex],
        this.values[currentIdx],
      ];
      currentIdx = nextIndex;
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
    const mixed = first + (second * 2);
    heap.insert(mixed);
    mixCount++;
  }

  return mixCount;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
