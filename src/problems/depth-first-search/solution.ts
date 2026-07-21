// Depth first search (DFS)
// it's used to explore a graph's in depth and it's built using a stack

export type T = string | number

export function dfs(g: Record<T, T[]>, iNode: T, cb: (n: T) => void): any {
  const s = new Stack();

  // Add the initial node
  s.push(iNode);

  while(!s.isEmpty()) {
    const n = s.pop()!;

    cb(n);

    const adj = g[n];

    adj.forEach((elem) => {
      s.push(elem);
    })
  }
}

class Stack {
  private arr: T[] = [];

  constructor() {}

  // Pushes to the top of the stack
  push(elem: T): void {
    this.arr.push(elem);
  }

  // Pops from the front of the queue
  pop(): T | undefined {
    return this.arr.pop()
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }
}
