export class LinkNode {
  val: string;
  next: LinkNode | null;
  constructor(val: string, next?: LinkNode | null) {
    this.val = val;
    this.next = next ?? null;
  }
}

export function linkedListTarget(head: LinkNode, target: string): boolean {
  let isIncluded = false;

  let cur: LinkNode | null = head;

  while (cur !== null) {
    if (cur.val === target) {
      isIncluded = true;
    }
    cur = cur.next;
  }

  return isIncluded;
}

export function linkedListTargetRec(head: LinkNode | null, target: string): boolean {
  if (head === null) return false;
  if (head.val === target) return true;

  return linkedListTargetRec(head.next, target);
}
