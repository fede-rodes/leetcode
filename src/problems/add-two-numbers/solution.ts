// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0
// itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explanation: 9999999 + 9999 = 10009998

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  // Traverse both
  let cur1: ListNode | null = l1;
  let cur2: ListNode | null = l2;
  let carry = 0;
  let dummy: ListNode = new ListNode(0); // placeholder/reference
  const res: ListNode = dummy;

  while (cur1 !== null || cur2 !== null || carry > 0) {
    const sum = (cur1?.val ?? 0) + (cur2?.val ?? 0) + carry; // < 20, so carry <= 1
    carry = sum > 9 ? 1 : 0;
    const val = sum > 9 ? sum - 10 : sum;
    const next = new ListNode(val);

    cur1 = cur1 !== null ? cur1.next : null;
    cur2 = cur2 !== null ? cur2.next : null;

    dummy.next = next;
    dummy = next;
  }

  return res.next;
}

export function arrToLL(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const n = arr.length;
  let prev: ListNode = new ListNode(arr[n - 1]);

  for (let i = arr.length - 1; i > 0; i--) {
    const val = arr[i - 1];
    prev = new ListNode(val, prev);
  }

  return prev;
}

// export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   if (l1 === null && l2 === null) return null;
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;

//   // Traverse l1
//   let cur1: ListNode | null = l1;
//   const arr1: number[] = [];

//   while (cur1 !== null) {
//     arr1.push(cur1.val);
//     cur1 = cur1.next;
//   }

//   // Traverse l2
//   let cur2: ListNode | null = l2;
//   const arr2: number[] = [];

//   while (cur2 !== null) {
//     arr2.push(cur2.val);
//     cur2 = cur2.next;
//   }

//   const num1 = BigInt(arr1.reverse().join(""));
//   const num2 = BigInt(arr2.reverse().join(""));

//   const res = num1 + num2;

//   const arr = res
//     .toString()
//     .split("")
//     .map((char) => Number(char));
//   let prev: ListNode | null = null;

//   arr.forEach((val) => {
//     prev = new ListNode(val, prev ?? undefined);
//   });

//   return prev;
// }

// export function arrToLL(arr: number[]): ListNode | null {
//   if (arr.length === 0) return null;

//   const n = arr.length;
//   let prev: ListNode = new ListNode(arr[n - 1]);

//   for (let i = arr.length - 1; i > 0; i--) {
//     const val = arr[i - 1];
//     prev = new ListNode(val, prev);
//   }

//   return prev;
// }
