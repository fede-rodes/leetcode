export type Grid = string[][];

export function islandCount(grid: Grid): number {
  const m = grid.length; // row count
  const n = grid[0].length; // cols count

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Every time I explore a new island I will return true
      if (dfs(grid, m, n, i, j)) {
        count++;
      }
    }
  }

  return count;
}

export function dfs(grid: Grid, m: number, n: number, i: number, j: number): boolean {
  if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] !== "L") return false;
  grid[i][j] = "#"; // mark the node as visited
  // Explore and mark all L neighbours as visited
  dfs(grid, m, n, i + 1, j);
  dfs(grid, m, n, i - 1, j);
  dfs(grid, m, n, i, j + 1);
  dfs(grid, m, n, i, j - 1);
  return true;
}
