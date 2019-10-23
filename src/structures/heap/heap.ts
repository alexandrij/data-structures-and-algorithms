export abstract class Heap<T> {
  protected heap: T[] = [];

  get size(): number {
    return this.heap.length;
  }

  public peek(): T|undefined {
    return this.heap[this.heap.length - 1];
  }

  public add(item: T): this {
    this.heap.push(item);
    this.heapifyUp();
    return this;
  }

  public remove(item: T): this {
    let i = 0;

    while (i < this.heap.length) {
      if (this.heap[i] === item) {
        if (this.heap.length === 1 || i === this.heap.length - 1) {
          this.heap.pop();
        } else {
          this.heap[i] = this.heap[this.heap.length - 1];
          this.heap.pop();

          const parentItem = this.heap[this.getParentIndex(i)];

          if (this.hasLeftChild(i) &&
              (!parentItem ||
               this.pairIsInCorrectOrder(parentItem, this.heap[i]))) {
            this.heapifyDown(i);
          } else {
            this.heapifyUp(i);
          }
          i = 0;
          continue;
        }
      }
      i++;
    }
    return this;
  }

  public poll(): T|undefined {
    if (this.heap.length > 1) {
      const item = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown();
      return item;
    } else {
      return this.heap.pop();
    }
  }

  public toString() {
    return this.heap.toString();
  }

  protected getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  protected hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  protected getLeftChildIndex(parentIndex: number): number {
    return (parentIndex * 2) + 1;
  }

  protected getRightChildIndex(parentIndex: number): number {
    return (parentIndex * 2) + 2;
  }

  protected hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  protected hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  protected heapifyUp(startIndex?: number): void {
    let currentIndex = startIndex || this.heap.length - 1;

    while (this.hasParent(currentIndex) &&
           !this.pairIsInCorrectOrder(
               this.heap[this.getParentIndex(currentIndex)],
               this.heap[currentIndex])) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  protected heapifyDown(startIndex: number = 0): void {
    let currentIndex = startIndex;
    let nextIndex: number;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) &&
          this.pairIsInCorrectOrder(
              this.heap[this.getRightChildIndex(currentIndex)],
              this.heap[this.getLeftChildIndex(currentIndex)])) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      if (this.pairIsInCorrectOrder(
              this.heap[currentIndex],
              this.heap[nextIndex],
              )) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  protected swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] =
        [this.heap[index2], this.heap[index1]];
  }

  protected abstract pairIsInCorrectOrder(parent: T, child: T): boolean;
}
