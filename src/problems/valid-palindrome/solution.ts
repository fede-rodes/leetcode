export function isPalindrome(s: string): boolean {
  // I'd like to use two pointers (indices), one starting at the begining and the other
  // at the end and then move then towards the center.
  // But first we need to filter non-alpha numeric characters
  const data = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const n = data.length;

  // pointers
  let l = 0;
  let r = n - 1;

  while (l < r) {
    const wl = data[l];
    const wr = data[r];
    if (wl !== wr) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
