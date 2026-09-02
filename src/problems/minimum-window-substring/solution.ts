// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.
export function minWindow(s: string, t: string): string {
  const m = s.length;
  const n = t.length;

  // First I'll create a hash map (O(1) lookup) for the string t to keep track of the
  // characters in t and store them as keys inside the map and also we'll compute
  // the number of times the character of t is repeated.
  if (n === 0 || m === 0) return "";

  // Then, we'll create a window in 2 starting with a single element at index 0. We'll
  // also store this information inside another hash map to allow us to compare this map
  // with the one created from s. In case tMap includes sMap, then we know we have a solution.
  // We'll move the window searching for candidate solutions until finding the one
  // with the minimum number of elements.
  const wMap = new MapCount(t);

  let l = 0; // left most index of the window
  let r = l; //  right most index of the window
  let minSub = "";
  wMap.push(s[r]);

  if (wMap.containsT()) return s[r];

  const sMap = new MapCount(t);
  s.split("").forEach((char) => {
    sMap.push(char);
  });
  if (!sMap.containsT()) return "";

  while (r < m) {
    if (wMap.containsT()) {
      const sub = s.slice(l, r + 1);
      if (minSub === "") {
        minSub = sub;
      } else if (minSub.length > sub.length) {
        minSub = sub;
      }
      // can we have a situation where l > r?
      wMap.shift(s[l]);
      l++;
      if (r < l) {
        r = l;
        wMap.push(s[r]);
      }
    } else {
      r++;
      if (r < m) {
        wMap.push(s[r]);
      }
    }
  }

  return minSub;
}

class MapCount {
  private matchCount = 0;
  private matchTarget = 0;
  private tMap: Record<string, number> = {};
  private sMap: Record<string, number> = {};
  //   private queue: string[] = [];

  constructor(target: string) {
    target.split("").forEach((char) => {
      this.add(this.tMap, char);
    });
    this.matchTarget = target.length;
  }

  private add(map: Record<string, number>, char: string): void {
    if (map[char] === undefined) {
      map[char] = 0;
    }
    map[char]++;
  }

  //   getQueue(): string {
  //     return this.queue.join("");
  //   }

  // [Adds a new character] and increases character/key count to the map
  // Plus adds a new character to the queue (string)
  push(char: string) {
    // this.queue.push(char);
    this.add(this.sMap, char);
    if (this.sMap[char] <= this.tMap[char]) {
      this.matchCount++;
    }
  }

  // decreases the character/key count in the map. shifts one element from
  // the beginning of the queue
  shift(char: string) {
    // const out = this.queue.shift()!;
    this.sMap[char]--;
    if (this.sMap[char] < this.tMap[char]) {
      this.matchCount--;
    }
    return char;
  }

  containsT(): boolean {
    return this.matchCount === this.matchTarget;
  }
}

// // 76. Minimum Window Substring

// // Given two strings s and t of lengths m and n respectively, return the minimum window
// // of s such that every character in t (including duplicates) is included in the window.
// // If there is no such substring, return the empty string "".

// // The testcases will be generated such that the answer is unique.
// export function minWindow(s: string, t: string): string {
//   // First I'll create a hash map (O(1) lookup) for the string t to keep track of the
//   // characters in t and store them as keys inside the map and also we'll compute
//   // the number of times the character of t is repeated.
//   if (t.length === 0) return "";

//   const tMap = new MapCount(t);
//   // Then, we'll create a window in 2 starting with a single element at index 0. We'll
//   // also store this information inside another hash map to allow us to compare this map
//   // with the one created from s. In case tMap includes sMap, then we know we have a solution.
//   // We'll move the window searching for candidate solutions until finding the one
//   // with the minimum number of elements.
//   const m = s.length;
//   if (m === 0) return "";

//   let l = 0; // left most index of the window
//   let r = l; //  right most index of the window
//   let minSub = "";
//   const wMap = new MapCount(s.slice(0, r + 1));

//   if (wMap.includes(tMap)) return wMap.getQueue();

//   // We could test wheter or not a solution exist before trying to find the minimum one
//   const sMap = new MapCount(s);
//   if (!sMap.includes(tMap)) return "";

//   while (r < m) {
//     if (wMap.includes(tMap)) {
//       const sub = wMap.getQueue();
//       if (minSub === "") {
//         minSub = sub;
//       } else if (minSub.length > sub.length) {
//         minSub = sub;
//       }
//       // can we have a situation where l > r?
//       l++;
//       if (r < l) {
//         r = l;
//         wMap.push(s[r]);
//       }
//       wMap.shift();
//     } else {
//       r++;
//       if (r < m) {
//         wMap.push(s[r]);
//       }
//     }
//   }

//   return minSub;
// }

// class MapCount {
//   private map: Record<string, number> = {};
//   private queue: string[] = [];

//   constructor(str: string) {
//     str.split("").forEach((char) => {
//       this.add(char);
//     });
//   }

//   private add(char: string): void {
//     if (this.map[char] === undefined) {
//       this.map[char] = 0;
//     }
//     this.map[char]++;
//     this.queue.push(char);
//   }

//   // Returns true if the given mapCount instance is included
//   // inside the current instance.
//   // Ex. const map1 = new MapCount("abc")
//   // const map2 = new MapCount("ab")
//   // map1.includes(map2)? => true
//   includes(mapCount: MapCount): boolean {
//     let included = true;

//     for (const [key, value] of Object.entries(mapCount.getMap())) {
//       if (this.map[key] === undefined || this.map[key] < value) {
//         included = false;
//       }
//     }

//     return included;
//   }

//   getQueue(): string {
//     return this.queue.join("");
//   }

//   // [Adds a new character] and increases character/key count to the map
//   // Plus adds a new character to the queue (string)
//   push(char: string) {
//     this.add(char);
//   }

//   // decreases the character/key count in the map. shifts one element from
//   // the beginning of the queue
//   shift() {
//     const out = this.queue.shift()!;
//     this.map[out]--;
//     return out;
//   }

//   getMap(): Readonly<Record<string, number>> {
//     return Object.freeze(this.map);
//   }
// }
