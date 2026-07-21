export function hIndex(citations: number[]): number {
  // [3,2,0,4,1]
  // If we sort the array in ascending order:
  // [0,1,2,3,4]
  // then we compute the length of the array 'n'
  // for each index, we look at the number of citations,
  // citations[0] = 0, n-2 remaining element which are >= 0
  // then we have at least 0 papers with 0 or more citations
  // citations[1] = 1 and are n-3 (3) more papers with at least 1 citation
  // then hIndex >= 1
  const n = citations.length;
  citations.sort((a,b) => a-b)

  let hIndex = 0; // <= n

  for (let i = 0; i < n; i++) {
    // number of citations for paper i
    const cit = citations[i];
    // number of papers with 'cit' or more citations
    const left = n - i;

    hIndex = Math.max(hIndex, Math.min(cit, left));
  }

  return hIndex;
};
