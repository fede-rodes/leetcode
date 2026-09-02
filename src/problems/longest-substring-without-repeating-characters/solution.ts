// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and
// "cab" are also correct answers.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and
// not a substring.

// Constraints:

//     0 <= s.length <= 105
//     s consists of English letters, digits, symbols and spaces.

// export function lengthOfLongestSubstring(s: string): number {
//   const k = s.length;

//   let l = 0;
//   // let r = l;
//   let leadingElement = undefined;
//   const set: Set<string> = new Set();
//   let len = 0;
//   let maxLength = 0;

//   // Observation: we cannot have more than one duplicated element
//   for (let r = 0; r < k; r++) {
//     leadingElement = s[r];
//     set.add(leadingElement);

//     while()
//     if (leadingElement in set) {
//       // element at index "l" should leave the window
//       set[s[l]]--;
//       l++;
//       len--;
//     } else {
//       maxLength = Math.max(maxLength, len);
//       r++;
//       leadingElement = s[r];
//       set[leadingElement] =
//         set[leadingElement] !== undefined ? set[leadingElement] + 1 : 1;
//       len++;
//     }
//   }

//   return maxLength;
// }

// function hasDuplicates(window: Record<string, number>, char: string): boolean {
//   return window[char] > 1;
// }

export function lengthOfLongestSubstring(s: string): number {
  const k = s.length;

  let l = 0;
  let r = l;
  const window: Record<string, number> = { [s[r]]: 1 };
  let len = 1;
  let maxLength = 1;
  let leadingElement = s[r];

  // Observation: we cannot have more than one duplicated element
  while (r < k) {
    if (hasDuplicates(window, leadingElement)) {
      // element at index "l" should leave the window
      window[s[l]]--;
      l++;
      len--;
    } else {
      maxLength = Math.max(maxLength, len);
      r++;
      leadingElement = s[r];
      window[leadingElement] =
        window[leadingElement] !== undefined ? window[leadingElement] + 1 : 1;
      len++;
    }
  }

  return maxLength;
}

function hasDuplicates(window: Record<string, number>, char: string): boolean {
  return window[char] > 1;
}
