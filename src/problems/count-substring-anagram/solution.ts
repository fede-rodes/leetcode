class MapCount {
  private map: Record<string, number> = {};

  constructor(s: string) {
    // s.split("").forEach(this.add);
    s.split("").forEach((char) => {
      this.add(char);
    });
  }

  add(char: string): void {
    // Init key if not already present
    if (!(char in this.map)) {
      this.map[char] = 0;
    }
    // Increment key count
    this.map[char]++;
  }

  remove(char: string): void {
    if (!(char in this.map)) throw new Error(`Char ${char} is not part of the map`);
    // Decrement char count
    this.map[char]--;
  }

  equals(mapCount: MapCount): boolean {
    let isEqual = true;

    for (const char in this.map) {
      if (!mapCount.in(char) || this.map[char] !== mapCount.getCount(char)) {
        isEqual = false;
      }
    }

    return isEqual;
  }

  in(char: string): boolean {
    return char in this.map;
  }

  getCount(char: string): number {
    return this.map[char] ?? 0;
  }
}

// Count the number of times the anagram appears inside of the string
// duplicate characters are allowed!!
export function countSubAnagram(s: string, anagram: string): number {
  const k = anagram.length;

  const anagramMap = new MapCount(anagram);
  const sMap = new MapCount(s.slice(0, k));

  let count = 0;

  if (anagramMap.equals(sMap)) {
    count++;
  }

  // ["a", "b", "c", "d"]
  for (let i = 0; i < s.length - k; i++) {
    sMap.remove(s[i]);
    sMap.add(s[i + k]);
    if (anagramMap.equals(sMap)) {
      count++;
    }
  }

  return count;
}
