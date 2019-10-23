import {MinHeap} from '../heap/min-heap';

export class PriorityQueue<T> {
  private _data: MinHeap<T> = new MinHeap();

  get size(): number {
    return this._data.size;
  }

  public peek(): T|undefined {
    return this._data.peek();
  }

  public enqueue(item: T): void {
    this._data.add(item);
  }

  public dequeue(): T|undefined {
    return this._data.poll();
  }

  public toString() {
    return this._data.toString();
  }
}
