// reverse the order of the given linked list and return the head
export class ListNode {
  val: string;
  next: ListNode | null;
  constructor(val: string, next?: ListNode | null) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function reverseLinkedList(head: ListNode): ListNode {
  let cur: ListNode | null = head;
  let prev: ListNode | null = new ListNode(head.val);

  while (cur !== null) {
    if (cur.next !== null) {
      prev = new ListNode(cur.next.val, prev);
    }
    cur = cur.next;
  }

  return prev;
}

// A -> B -> C -> D
