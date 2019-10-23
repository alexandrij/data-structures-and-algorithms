import {MinHeap} from '../heap/min-heap';

export class PriorityQueue<T> {
  private data: MinHeap<T> = new MinHeap();

  get size(): number {
    return this.data.size;
  }

  public peek(): T|undefined {
    return this.data.peek();
  }

  public enqueue(item: T): void {
    this.data.add(item);
  }

  public dequeue(): T|undefined {
    return this.data.poll();
  }

  public toString() {
    return this.data.toString();
  }
}
