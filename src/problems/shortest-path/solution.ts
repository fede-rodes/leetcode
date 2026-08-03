export type Edges = [string, string][];
export type Graph = Record<string, string[]>;

// Compute the shortest path between 2 given nodes
export function shortest(edges: Edges, start: string, end: string): number {
  const graph = buildGraph(edges);
  const visited = new Set<string>();

  return bfs(graph, start, end, visited);
}

// I want to use recursion:
// given a current node (start first)
// find all its neighbours

export function buildGraph(edges: Edges): Graph {
  const graph: Graph = {};

  for (const [l, r] of edges) {
    if (!(l in graph)) {
      graph[l] = [];
    }
    if (!(r in graph)) {
      graph[r] = [];
    }
    graph[l].push(r);
    graph[r].push(l);
  }

  return graph;
}

export function bfs(graph: Graph, start: string, end: string, visited: Set<string>): number {
  visited.add(start);

  const queue: [string, number][] = [[start, 0]];

  while (queue.length > 0) {
    const [cur, lng] = queue.shift()!;

    if (cur === end) return lng;

    for (const n of graph[cur]) {
      if (!visited.has(n)) {
        queue.push([n, lng + 1]);
        visited.add(n);
      }
    }
  }

  return -1;
}
