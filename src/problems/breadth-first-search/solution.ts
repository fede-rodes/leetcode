// Breadth first search (BFS)
// it's used to explore a graph's surrounding and it's built using a queue

export type T = string | number

export function bfs(g: Record<T, T[]>, iNode: T, cb: (n: T) => void): any {
  const q = new Queue(); // how do we represent a queue structure?

  // Add the initial node
  q.push(iNode);

  while(!q.isEmpty()) {
    const n: T = q.pop()!;
    // Do something with the node
    cb(n);
    // Push all adjacent nodes
    const adj: T[] = g[n];

    adj.forEach((node) => {
      q.push(node);
    })
  }
}

class Queue {
  private arr: T[] = [];

  constructor() {}

  // Pushes to the end of the queue
  push(elem: T): void {
    this.arr.push(elem);
  }

  // Pops from the front of the queue
  pop(): T | undefined {
    const n = this.arr.length;

    if (n === 0) return;

    const elem = this.arr[0];

    // shift all elements to the left
    if (n > 1) {
      for (let i = 1; i < n; i++) {
        this.arr[i-1] = this.arr[i];
      }
    }

    // Remove the last element
    this.arr.pop();

    return elem
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }
}
