class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ value: vertex2, weight });
    this.adjacencyList[vertex2].push({ value: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let currentVertex;

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (nodes.values.length > 0) {
      currentVertex = nodes.dequeue().value ;

      if (currentVertex === finish) {
        const path = [];
        while (previous[currentVertex]) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        return path.concat(currentVertex).reverse();
      }

      for (const neighbor of this.adjacencyList[currentVertex]) {
        const newDistance = distances[currentVertex] + neighbor.weight;

        if (newDistance < distances[neighbor.value]) {
          distances[neighbor.value] = newDistance;
          previous[neighbor.value] = currentVertex;
          nodes.enqueue(neighbor.value, newDistance);
        }
      }
    }
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
