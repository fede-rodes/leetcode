type G = Record<string, string[]>;

export function i2d(edges: [string, string][]): G {
  const graph: G = {};

  for (const e of edges) {
    const [l, r] = e;
    if (!(l in graph)) {
      graph[l] = [];
    }
    if (!(r in graph)) {
      graph[r] = [];
    }
    graph[l].push(r); // there is no repetition, otherwise we should have repeated edges
    graph[r].push(l);
  }

  return graph;
}
// export function i2d(edges: string[][]): Record<string, string[]> {
//   const n = edges.length
//   const graph: Record<string, string[]> = {}

//   for (let i = 0; i < n; i++) {
//     const nodes = edges[i]

//     nodes.forEach((n) => {
//       if (graph[n] === undefined) {
//         graph[n] = [];
//       }
//       nodes.forEach((m) => {
//         if (m !== n && !graph[n].includes(m)) {
//           graph[n].push(m)
//         }
//       })
//     })
//   }

//   return graph;
// }
// g = [
// [i,j],
// [j,k],
// [l,i]
// ]
