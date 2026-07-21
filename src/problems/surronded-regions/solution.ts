export type Grid = string[][]
export type Edges = [string,string][]
export type Graph = Record<string, string[]>

export function solve(board: Grid): void {
  // First we want to discover the set of islands composed by o's.
  // Then, for each of the islands, we check whether or not the island
  // is fully surrounded by x's. If so, we convert the island into x's
  const m = board.length;
  const n = board[0].length;

  // Traverse the first and last cols and build islands for
  // all O elements and mark those elements as visited '#'
  for (let j = 0; j < n; j++) {
    dfs(board, m, n, 0, j);
    dfs(board, m, n, m - 1, j);
  }

  // Repeat the same process for the first and last rows
  for (let i = 0; i < m; i++) {
    dfs(board, m, n, i, 0);
    dfs(board, m, n, i, n - 1);
  }

  // Finally traverse the whole board and first mark all O elements
  // with X. Then mark all # elements back to O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = board[i][j]
      if (val === "O") { board[i][j] = "X" }
      if (val === "#") { board[i][j] = "O" }
    }
  }
};

// Explore all surrounding elements neighboring [i,j] and mark them as visited '#'
// We'll start the exploration using a node on the border, so we are sure none
// of its neighbors can me surrounded
export function dfs(board: Grid, m: number, n: number, i: number, j: number): void {
  if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || board[i][j] !== "O") return
  board[i][j] = "#" // mark element as visited
  dfs(board, m, n, i - 1, j);
  dfs(board, m, n, i + 1, j);
  dfs(board, m, n, i, j - 1);
  dfs(board, m, n, i, j + 1);
}

// 130. Surrounded Regions
// Medium
// Topics
// premium lock icon
// Companies
// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: A region is surrounded if none of the 'O' cells in that region are on the edge of the board. Such regions are completely enclosed by 'X' cells.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.
/**
 Do not return anything, modify board in-place instead.
 */
// export type Grid = string[][]
// export type Edges = [string,string][]
// export type Graph = Record<string, string[]>

// export function solve(board: Grid): void {
//   // First we want to discover the set of islands composed by o's.
//   // Then, for each of the islands, we check whether or not the island
//   // is fully surrounded by x's. If so, we convert the island into x's
//   const n = board.length;
//   const m = board[0].length;

//   const edges: Edges = buildEdges(board);
//   const graph: Graph = buildGraph(edges);

//   // Cache: I want to keep track of the nodes there were already visited
//   const visited = new Set<string>()

//   for(let key in graph) { // we'll traverse all nodes
//     // Create an island full of o's and store them into a set/array
//     const region = explore(graph, key, visited);
//     // Check whether or not the whole region is surrounded
//     // it'll be surrounded as long as all the elements [i,j]
//     // are such that i > 0, j > 0, i < n -1, j < m - 1
//     if (region !== undefined && isSurrounded(n, m, region)) {
//       // If so, update the graph from o's to x's
//       convert(board, region);
//     }
//   }
// };

// export function buildEdges(board: Grid): Edges {
//   // We have to explore the grid and create an edges for every
//   // o's corrdinate and also for every pair of connected o's coordinates
//   const n = board.length; // #rows
//   const m = board[0].length; // #cols

//   const edges: Edges = [];

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (board[i][j] === "O") {
//         const node = `${i}_${j}`;
//         edges.push([node, node])
//         if (i < n - 1 && board[i+1][j] === "O") {
//           edges.push([node, `${i+1}_${j}`])
//         }
//         if (j < m - 1 && board[i][j+1] === "O") {
//           edges.push([node, `${i}_${j+1}`])
//         }
//       }
//     }
//   }

//   return edges;
// }

// export function buildGraph(edges: Edges): Graph {
//   const graph: Graph = {}

//   for (let [l,r] of edges) {
//     if (!(l in graph)) { graph[l] = []}
//     if (!(r in graph)) { graph[r] = []}
//     if (l !== r){ graph[l].push(r);}
//     if (l !== r) { graph[r].push(l);}
//   }

//   return graph;
// }

// export function explore(graph: Graph, source: string, visited: Set<string>): Set<string> | undefined {
//   if (visited.has(source)) return undefined;

//   visited.add(source);

//   const stack = [source];
//   const set = new Set<string>();

//   while(stack.length > 0) {
//     const cur = stack.pop()!;

//     set.add(cur);

//     for (let neighbour of graph[cur]) {
//       if (!visited.has(neighbour)) {
//         stack.push(neighbour);
//         visited.add(neighbour);
//       }
//     }
//   }


//   return set;
// }

// export function isSurrounded(n: number, m: number, set: Set<string>): boolean {
//   let res = true;
//   set.forEach((node) => {
//     const [i,j] = node.split("_").map(n => Number(n));
//     if (i === 0 || i === n - 1) { res = false };
//     if (j === 0 || j === m - 1) { res = false };
//   })

//   return res;
// }

// export function convert(board: Grid, set: Set<string>): void {
//   set.forEach((n) => {
//     const [i, j] = n.split("_").map(n => Number(n));
//     board[i][j] = "X";
//   })
// }
