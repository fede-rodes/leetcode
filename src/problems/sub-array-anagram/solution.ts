class Counter {
  private map: Record<string, number> = {};
  public count: number = 0;

  constructor(anagram: string) {
    // Load all characters of the "anagram" into a set -> O(k)
    anagram.split("").forEach((char) => {
      this.map[char] = 0;
    });
  }

  inc(char: string): void {
    if (!(char in this.map)) return;

    if (++this.map[char] === 1) {
      this.count++;
    }
  }

  dec(char: string): void {
    if (!(char in this.map)) return;

    if (--this.map[char] === 0) {
      this.count--;
    }
  }
}

export function hasSubstringAnagram(s: string, anagram: string): boolean {
  const k = anagram.length;
  const counter = new Counter(anagram);

  // Now we can check whether or not a character from another substring is part of
  // anagram in O(1) ops.

  // Let's consider the initial window of length "k" and let's count the number of
  // letters matching the target anagram
  s.slice(0, k)
    .split("")
    .forEach((char) => {
      counter.inc(char);
    });
  // O(k)

  // If all the letter of the initial window are also part of the anagram,
  // then we have an anagram
  if (counter.count === k) return true;

  // Let's now move the window forward. If the leaving element was part
  // of the target anagram, we decrease the counter by one. If the character
  // entering the new window is part of the target anagram we add 1.
  for (let i = 0; i < s.length - k; i++) {
    // n ops
    counter.dec(s[i]);
    counter.inc(s[i + k]);
    if (counter.count === k) return true;
  }

  return false;
}
// ops: O(n), mem: O(k)

// class Counter {
//   private set: Set<string>;
//   private map: Record<string, number>;
//   public count: number;

//   constructor() {
//     this.set = new Set<string>();
//     this.map = {};
//     this.count = 0;
//   }

//   incCount(char: string): void {
//     if (!this.set.has(char)) return;

//     this.map[char] = this.map[char] !== undefined ? this.map[char] + 1 : 1;

//     if (this.map[char] === 1) {
//       this.count++;
//     }
//   }

//   decCount(char: string): void {
//     if (!this.set.has(char)) return;

//     this.map[char]--;

//     if (this.map[char] === 0) {
//       this.count--;
//     }
//   }

//   addToSet(char: string): void {
//     this.set.add(char);
//   }
// }

// export function hasSubstringAnagram(s: string, anagram: string): boolean {
//   const k = anagram.length;
//   const counter = new Counter();

//   // Let's load all characters of the "anagram" into a set
//   anagram.split("").forEach((char) => {
//     counter.addToSet(char);
//   });
//   // O(k)
//   // Now we can check whether or not a character from another substring is part of
//   // anagram in O(1) ops.

//   // Let's consider the initial window of length "k" and let's count the number of
//   // letters matching the target anagram
//   s.slice(0, k)
//     .split("")
//     .forEach((char) => {
//       counter.incCount(char);
//     });
//   // O(k)

//   // If all the letter of the initial window are also part of the anagram,
//   // then we have an anagram
//   if (counter.count === k) return true;

//   // Let's now move the window forward. If the leaving element was part
//   // of the target anagram, we decrease the counter by one. If the character
//   // entering the new window is part of the target anagram we add 1.
//   for (let i = 0; i < s.length - k; i++) {
//     // n ops
//     counter.decCount(s[i]);
//     counter.incCount(s[i + k]);
//     if (counter.count === k) return true;
//   }

//   return false;
// }
// // ops: O(n), mem: O(k)
