export class RandomizedSet {
  // for every inserted number, we'll add an entry to the object
  // such that obj[i] = 1.
  // When an element is removed we'll mark it as obj[i] = undefined
  // On top of this, we want an array to keep track of the existing keys (inserted number).
  // When a number is removed from the RandomizedSet, we want to remove said element
  // from the array in O(1)
    private obj: Record<number, number | undefined> = {};
    private arr: number[] = [];

    constructor() {
    }

    // bool insert(int val) Inserts an item val into the set if not present.
    // Returns true if the item was not present, false otherwise.
    insert(val: number): boolean {
      // val not present in the set
      if (this.obj[val] === undefined) {
        const n = this.arr.length;
        this.arr[n] = val;
        this.obj[val] = n; // store the index associated to the value
        return true;
      }
      return false;
    }

    // bool remove(int val) Removes an item val from the set if present.
    // Returns true if the item was present, false otherwise.
    remove(val: number): boolean {
      if (this.obj[val] !== undefined) {
        const n = this.arr.length;
        const index = this.obj[val];
        this.obj[val] = undefined;
        if (index !== n-1) {
          this.arr[index] = this.arr[n-1];
          this.obj[this.arr[index]] = index;
        }
        this.arr.pop();
        return true;
      }
      return false;
    }

    getRandom(): number {
      // int getRandom() Returns a random element from the current set of elements
      // (it's guaranteed that at least one element exists when this method is called).
      // Each element must have the same probability of being returned.
      const n = this.arr.length;
      const rand = Math.floor(Math.random() * n) // random number between 0 and n-1
      return this.arr[rand];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
