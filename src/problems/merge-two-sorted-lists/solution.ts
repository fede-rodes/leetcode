// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) return null;
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // Both list1 and list2 are not null
  let r1: ListNode | null = list1;
  let r2: ListNode | null = list2;
  let dummy: ListNode | null = new ListNode();
  const res = dummy;

  while (r1 !== null || r2 !== null) {
    const min = getMin(r1, r2);
    const next = new ListNode(min); // next?

    dummy.next = next;
    dummy = next;

    if (r1 !== null && r1.val === min) {
      r1 = r1?.next ?? null;
    } else {
      r2 = r2?.next ?? null;
    }
  }

  return res.next;
}

function getMin(l1: ListNode | null, l2: ListNode | null) {
  if (l1 !== null && l2 !== null) return Math.min(l1.val, l2.val);
  if (l1 !== null) return l1.val;
  if (l2 !== null) return l2.val;
  throw new Error("At least one of the nodes needs to be not null");
}

export function arrToLL(arr: number[]): ListNode | null {
  const n = arr.length;
  let next: ListNode | null = null;

  for (let i = n; i > 0; i--) {
    next = new ListNode(arr[i - 1], next);
  }

  return next;
}
// 1 -> 2 -> 4
// 1 -> 3 -> 4 -> 5

// cur1
// cur2

// dummy = new ListNode(0)
// next = new ListNode(min, next?)

// dummy.next = next
// dummy = next
