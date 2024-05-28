class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(currentIdx) {
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      const parentValue = this.values[parentIdx];
      const currentValue = this.values[currentIdx];

      if (parentValue.priority <= currentValue.priority) break;

      this.values[parentIdx] = currentValue;
      this.values[currentIdx] = parentValue;

      currentIdx = parentIdx;
    }
  }

  dequeue() {
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
        this.values[leftChildIdx].priority < this.values[nextIndex].priority
      ) {
        nextIndex = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.values[rightChildIdx].priority < this.values[nextIndex].priority
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

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();

ER.enqueue('five', 5);
ER.enqueue('one', 1);
ER.enqueue('four', 4);
ER.enqueue('two', 2);
ER.enqueue('three', 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
