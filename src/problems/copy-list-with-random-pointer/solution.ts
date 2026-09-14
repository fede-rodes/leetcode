export class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
// 138. Copy List with Random Pointer

// A linked list of length n is given such that each node contains an additional random
// pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new
// nodes, where each new node has its value set to the value of its corresponding original
// node. Both the next and random pointer of the new nodes should point to new nodes
// in the copied list such that the pointers in the original list and copied list
// represent the same list state. None of the pointers in the new list should point to
// nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y,
// then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is
// represented as a pair of [val, random_index] where:

//     val: an integer representing Node.val
//     random_index: the index of the node (range from 0 to n-1) that the random pointer
// points to, or null if it does not point to any node.

// Your code will only be given the head of the original linked list.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

export function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) return null;

  // Let's traverse the linked list in order to make a deep copy
  let cur: _Node | null = head;
  let dummy: _Node | null = new _Node();
  const res = dummy; //  store the reference to the first node in the new linked list

  const originalArrLL: _Node[] = [];
  const copyArrLL: _Node[] = [];

  while (cur !== null) {
    const next = new _Node(cur.val); // next node is still not defined and the same might happen to the random node

    originalArrLL.push(cur);
    copyArrLL.push(next);

    dummy.next = next;
    // next.val is defined
    // next.random is not defined TODO
    dummy = next;
    cur = cur.next;
  }

  // Here I copied the original ll into a new one but still havent defined the random field
  for (let i = 0; i < copyArrLL.length; i++) {
    const orig = originalArrLL[i];

    const index = findNodeRef(originalArrLL, orig.random);

    copyArrLL[i].random = index === null ? null : copyArrLL[index];
  }

  return res.next;
}

function findNodeRef(arrLL: _Node[], target: _Node | null): number | null {
  for (let i = 0; i < arrLL.length; i++) {
    if (arrLL[i] === target) {
      return i;
    }
  }

  return null;
}

export function arrToLL(arr: [number, number | null][]): _Node | null {
  const n = arr.length;

  if (n === 0) return null;

  const llArr: _Node[] = [];

  for (let i = 0; i < n; i++) {
    llArr.push(new _Node());
  }

  for (let i = 0; i < n; i++) {
    const [val, randomIndex] = arr[i];
    llArr[i].val = val;
    llArr[i].next = i === n - 1 ? null : llArr[i + 1];
    llArr[i].random = randomIndex === null ? null : llArr[randomIndex];
  }

  return llArr[0];
}
