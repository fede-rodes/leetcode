// Given two strings s and t, return true if s is a subsequence of t, or
// false otherwise.

// A subsequence of a string is a new string that is formed from the original
// string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaining characters. (i.e., "ace" is a
// subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

export function isSubsequence(s: string, t: string): boolean {
  // We want to find out if 's' is a substring of 't'.
  // We would be tempted to use string.includes but for that the exact substring
  // 's' needs to be a piece of 't'.

  // Idea: we'll need to traverse the original t string from left to right or viceversa
  // looking for the first character of 's'. If the character is found, we consider the
  // second character of 's' and keep traversing the 't' string until we find
  // the same char in 't'. We keep traversing 't' always from where we left of
  // in the previous iteration.
  if (s.length === 0) return true;

  // s.length > 0
  let iS = 0;
  let isSub = false;

  // We traverse string 't' from left to right
  for (let iT = 0; iT < t.length; iT++) {
    const charT = t[iT];
    const charS = s[iS];

    if (charS === charT) {
      iS++;
      if (iS === s.length) {
        isSub = true;
      }
    }
  }

  return isSub;
}
