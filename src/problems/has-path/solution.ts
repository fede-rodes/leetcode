// Given a directed graph, is there a path starting from
// 's' and finishing in 'e'?

type G = Record<string, string[]>;

export function hasPath(graph: G, s: string, e: string): boolean {
  // in order for a path to exist, if i apply bfs or dfs on the graph
  // starting with node 's', then 'e' should be reachable
  let exist = false;

  function cb(node: string): void {
    if (node === e) {
      exist = true;
      return; // is this breaking the loop inside bfs?
    }
  }

  bfs(graph, s, cb);

  return exist;
}

function bfs(graph: G, source: string, cb: (node: string) => void): void {
  const q = [source];
  const map: Record<string, number> = { [source]: 1 }; // cache

  while (q.length > 0) {
    const cur = q.shift()!;

    cb(cur);

    for (const a of graph[cur]) {
      if (map[a] === undefined) {
        q.push(a);
        map[a] = 1;
      }
    }
  }
}
