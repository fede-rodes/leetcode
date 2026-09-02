export class LinkNode {
  val: number;
  next: LinkNode | null;
  constructor(val?: number, next?: LinkNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function linkedListSum(head: LinkNode): number {
  let sum = 0;

  let cur: LinkNode | null = head;

  while (cur !== null) {
    sum += cur.val;
    cur = cur.next;
  }

  return sum;
}

export function linkedListSumRec(head: LinkNode): number {
  const sum = 0;
  return helper(head, sum);
}

function helper(cur: LinkNode | null, acc: number): number {
  if (cur === null) return acc; // eventually we'll reach this point as long as the ll does not have cycles
  const sum = acc + cur.val;
  return helper(cur.next, sum);
}
