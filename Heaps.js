// For any index of an array n...
// The left child is stored at 2n+1, The right child is at 2n+2
// Its parent is at floored of (n-1)/2

class MaxVinaryHeap {
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

      if (parentValue >= currentValue) break;

      this.values[parentIdx] = currentValue;
      this.values[currentIdx] = parentValue;

      currentIdx = parentIdx;
    }
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
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
        this.values[leftChildIdx] > this.values[nextIndex]
      ) {
        nextIndex = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.values[rightChildIdx] > this.values[nextIndex]
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

const tree = new MaxVinaryHeap();
tree.insert(41);
tree.insert(39);
tree.insert(27);
tree.insert(33);
tree.insert(18);
tree.insert(12);
console.log(tree.extractMax());
console.log(tree.values);
