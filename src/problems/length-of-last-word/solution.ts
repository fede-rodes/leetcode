// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last
// word in the string.

// A word is a maximal consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

export function lengthOfLastWord(s: string): number {
  const n = s.length;

  let currWord = "";
  let lastWord = "";

  for (let i = 0; i < n; i++) {
    const char = s[i];

    if (char === " ") {
      if (currWord.length !== 0) {
        lastWord = currWord;
        currWord = "";
      }
    } else {
      currWord += char;
    }
  }

  return currWord !== "" ? currWord.length : lastWord.length;
}
