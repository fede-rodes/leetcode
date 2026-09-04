// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
// which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written
// as IV. Because the one is before the five we subtract it making four. The same
// principle applies to the number nine, which is written as IX. There are six
// instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.
type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const map: Record<Roman, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
// Given a roman numeral, convert it to an integer.
export function romanToInt(s: string): number {
  const n = s.length;
  // Given a string 's', we first need to separate each of the characters
  // We can do so by spliting the string into an array
  // Then we should read from left to right one element after the other:
  // Given an element at index 'l', if s[l+1] > s[l], then we need to substract
  // s[l] from the total amount, otherwise we add it
  let total = 0;
  const arr = s.split("") as Roman[];

  for (let i = 0; i < n - 1; i++) {
    const cur = arr[i]; // I, V, ...
    const next = arr[i + 1];
    if (map[cur] < map[next]) {
      total -= map[cur];
    } else {
      total += map[cur];
    }
  }

  total += map[arr[n - 1]];

  return total;
}
