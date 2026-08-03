export function numIslands(grid: string[][]): number {
  // we can build a directional graph where [i,j] is adjacent
  // to [a,b] iff a === i+1 && j === b || b === j + 1 && b === j

  // Once we have the graph built, we'll starte traversing the grid
  // from [0,0] -> [0,n] -> [1,0] -> [1,n] -> ...

  // whenever we find a "1", we apply bfs to create an island

  // if we find a "1" which coordinates are not in any of the existing
  // islands, we create a new island and apply bfs to find all neighbors
  let count = 0;
  const visited = new Set<string>();

  // Let's build a graph:
  const edges = buildEdges(grid);
  const graph = buildGraph(edges);
  console.log({ graph });

  for (const n in graph) {
    // 0_0, ...
    if (dfs(graph, n, visited)) {
      count++;
    }
  }

  return count;
}

type E = [string, string][];
type G = Record<string, string[]>;

export function buildEdges(grid: string[][]): E {
  const m = grid.length;
  const n = grid[0].length;

  const edges: E = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        edges.push([`${i}_${j}`, `${i}_${j}`]);
        if (i < m - 1 && grid[i + 1][j] === "1") {
          edges.push([`${i}_${j}`, `${i + 1}_${j}`]);
        }
        if (j < n - 1 && grid[i][j + 1] === "1") {
          edges.push([`${i}_${j}`, `${i}_${j + 1}`]);
        }
      }
    }
  }

  return edges;
}

// O(mxn)
export function buildGraph(edges: E): G {
  const graph: G = {};

  for (const e of edges) {
    const [l, r] = e;
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

// Explore all neighbors and marke them as visited
export function dfs(graph: G, source: string, visited: Set<string>): boolean {
  if (visited.has(source)) return false;

  visited.add(source);

  const s = [source]; // stack

  while (s.length > 0) {
    const cur = s.pop()!;

    for (const a of graph[cur]) {
      if (!visited.has(a)) {
        // cache: do not explore element already in the set
        s.push(a);
        visited.add(a);
      }
    }
  }

  return true;
}
