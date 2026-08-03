export type Graph = Record<string, string[]>;

export function largest(graph: Graph): number {
  // I'd like to traverse the graph using dfs, and for every island/group
  // we count the number of elements and return the largest island size
  const visited = new Set<string>();
  let longest = 0;

  for (const key in graph) {
    // In case the island was already visited, we return 0
    const prev = visited.size;
    dfs(graph, key, visited);
    longest = Math.max(longest, visited.size - prev);
  }

  return longest;
}

export function dfs(graph: Graph, source: string, visited: Set<string>): void {
  // if (visited.has(source)) return 0;
  if (visited.has(source)) return;

  // let count = 0;
  visited.add(source);

  const stack = [source];
  // count++

  while (stack.length > 0) {
    const cur = stack.pop()!;

    for (const n of graph[cur]) {
      if (!visited.has(n)) {
        stack.push(n);
        // count++;
        visited.add(n);
      }
    }
  }

  // return count;
}
