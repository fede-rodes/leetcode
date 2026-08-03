// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
export type Graph = Record<string, string[]>;
export type Edges = [string, string][];

export function calcEquation(
  equations: Edges,
  values: number[],
  queries: [string, string][],
): number[] {
  // we could think a query ["a","c"] as a path to go from "a" to "c", where the distance is given
  // by the following metric:
  // if there is a path from "a" to "c", the distance (query) is defined as the multiplication
  // of each of the edges ["a","b"] * ["b","c"]
  // going in the opposite direction is equivalent of multiplying ["c","a"] it distance(["a","c"]) ^ -1
  // going from "w" to "w" === 1 if "w" is defined, otherwise it's -1.

  // Given a query ["a", "b"], first we need to see if there is a path from "a" to "b".
  // In case we can't find such a path we return -1
  // Otherwise (there is a path), we calculate the query as the multiplication of the individual path
  // when are given in the original order or 1/distance where are traversed in the opposite order.
  // Finally, if the path has the same origin and destination we define it as distance 1.

  // I'd like to use breadth first search so that we find the shortest path
  const graph = buildGraph(equations);
  const output: number[] = [];

  for (const [a, b] of queries) {
    // Q: what happens if we need to get 2 queries with the same src?
    // if we mark the src node as visited for the 1st query, the the second wont run
    const visited = new Set<string>();
    output.push(bfs(graph, equations, values, a, b, visited));
  }

  return output;
}

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

export function bfs(
  graph: Graph,
  equations: Edges,
  values: number[],
  src: string,
  dst: string,
  visited: Set<string>,
): number {
  // If the destination is not a node of the graph, return -1
  if (!(dst in graph)) return -1;

  const queue: [string, number][] = [[src, 1]]; // [node, metric] going from src -> src is defined as 1 (src/src)

  // To prevent cycles
  visited.add(src);

  while (queue.length > 0) {
    const [node, query]: [string, number] = queue.shift()!;

    if (node === dst) return query;

    for (const n of graph[node]) {
      if (!visited.has(n)) {
        const index = findIndex(equations, [node, n]);
        if (index !== -1) {
          queue.push([n, query * values[index]]);
          visited.add(n);
        }
        const revIndex = findIndex(equations, [n, node]);
        if (revIndex !== -1) {
          queue.push([n, query * (1 / values[revIndex])]);
          visited.add(n);
        }
      }
    }
  }

  return -1;
}

export function findIndex(equations: [string, string][], target: [string, string]): number {
  let index = -1;

  equations.forEach(([a, b], idx) => {
    if (a === target[0] && b === target[1]) {
      index = idx;
    }
  });

  return index;
}
