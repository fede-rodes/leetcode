// given a linked list and an index, we need to return the value associated to said index

export class ListNode {
  val: string;
  next: ListNode | null;
  constructor(val: string, next?: ListNode) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function getNodeValue(head: ListNode, index: number): string | null {
  let cur: ListNode | null = head;
  let count = 0;

  while (cur !== null) {
    if (count === index) {
      return cur.val;
    }
    count++;
    cur = cur.next;
  }

  return null;
}

export function getNodeValueRec(head: ListNode | null, index: number): string | null {
  if (head === null) return null;
  if (index === 0) return head.val;

  return getNodeValueRec(head.next, index - 1);
}
