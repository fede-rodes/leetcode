// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1
//  You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
// take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have
// finished course 1. So it is impossible.
export type Graph = Record<string, string[]>;
export type Edges = [string, string][];

export function canFinish(numCourses: number, prerequisites: [number, number][]): boolean {
  // It seems to be a directed graph problem where:
  // 1. there should be as many keys (nodes) as numCourses
  // 2. There should exist a path from the first node to the last
  // ie, you can take a course only if you passed (completed) the required one
  // What I don't know how to model is the is the second example
  // 3. There shouldn't be any cycles, otherwise this would mean there is a
  // simultanous dependency.

  const graph: Graph = buildGraph(prerequisites);

  const keys = Object.keys(graph);

  if (keys.length > numCourses) return false;

  // There has to be a path from node a to node b of length numCourses, otherwise return false
  for (const key in graph) {
    if (!dfs(graph, key)) {
      return false;
    }
  }

  return true;
}

export function buildGraph(edges: [number, number][]): Graph {
  const graph: Graph = {};

  for (const edge of edges) {
    const l = edge[0].toString();
    const r = edge[1].toString();

    if (!(l in graph)) {
      graph[l] = [];
    }
    if (!(r in graph)) {
      graph[r] = [];
    }

    graph[l].push(r);
  }

  return graph;
}

// Returns the length of the path starting at src.
export function dfs(graph: Graph, src: string): boolean {
  // Keep track of the visited nodes, in case it repeats, it indicates a cicle (return -1)
  const visited = new Set<string>();

  const stack: string[] = [src];

  visited.add(src);

  while (stack.length > 0) {
    const [node] = stack.pop()!;

    const neighbors = graph[node];

    if (neighbors.length === 0) {
      visited.delete(node);
    }

    for (const n of neighbors) {
      if (visited.has(n)) {
        return false;
      }
      stack.push(n);
      visited.add(n);
    }
  }

  return true;
}
